import { Template, MergeDirectiveValue } from "./template.interface";
import { MergeOperation } from "../operations/merge-operation";
import { Operation } from "../operations/operation";
import { DEFAULT_FILTERS } from "./default-filters";
import { DEFAULT_TEMPLATE_CONFIG } from "./default-templater-config";
import { RemoveOperation } from "../operations/remove-operation";
import { TemplaterConfig } from "./templater-config.interface";
import { SortOperation } from "../operations/sort-operation";

const AWOL = -1;

/**
 * Configures behavior of a `Templater`
 */

const OPERATION_MAP : {[key:string]:(templater:Templater)=>Operation} = {
    "@xform:merge":(templater:Templater)=> new MergeOperation(templater),
    "@xform:remove":(templater:Templater)=> new RemoveOperation(templater),
    "@xform:sort":(templater:Templater)=> new SortOperation(templater)
};
export class Templater {

    constructor (
        public readonly template:Template,
        public readonly config:TemplaterConfig=DEFAULT_TEMPLATE_CONFIG
    ) {
        if (config.scaffolding.syntax.open[0]===config.scaffolding.syntax.dontInfer[0])
            throw new Error(`syntax configuration error: config.scaffolding.syntax.open "${config.scaffolding.syntax.open}" may not start with the same character as config.scaffolding.syntax.dontInfer ${config.scaffolding.syntax.dontInfer}\n${JSON.stringify(config.scaffolding.syntax)}`);
    }
    protected anchorDirectives(templateGraph:Template|Array<any>) {
        if (templateGraph instanceof Array) return templateGraph;
        let directives = {}, target = {};
        Object.keys(templateGraph).forEach(key=>(key.startsWith("@xform:")?directives:target as any)[key]=templateGraph[key]);
        return {
            ...directives,
            ...target
        };
    }
    /**
     * Parase a template object
     * @param templateGraph The root template object if not provided; or a graph on the template object
     * @returns A version of the template with values resolved and operations completed
     */
    parse(templateGraph?:Template|Array<any>|any, scope?:{[key:string]:any}) {
        if (typeof templateGraph === 'string') this.expression((templateGraph as string));
        if (typeof templateGraph !== 'object' && typeof templateGraph !== 'undefined') return templateGraph;
        templateGraph = this.anchorDirectives(templateGraph || this.template);
        let graphIsArray = templateGraph instanceof Array;
        let templatedGraph:{[key:string]:any}|Array<any> = graphIsArray?[]:{};
        for (let directiveOrProperty in templateGraph) {
            let resultingKey = this.expression(directiveOrProperty, scope);
            let resultingValue; 
            switch (typeof (templateGraph as any)[directiveOrProperty]) {
                case 'string':
                    resultingValue = this.expression((templateGraph as any)[directiveOrProperty], scope);
                    break;
                case 'object':
                    resultingValue = (templateGraph as any)[directiveOrProperty]
                        ? this.parse((templateGraph as any)[directiveOrProperty], scope)
                        : (templateGraph as any)[directiveOrProperty];
                    break;
                default: resultingValue = (templateGraph as any)[directiveOrProperty];
            }
            if (directiveOrProperty.startsWith("@xform:")) {
                if (typeof OPERATION_MAP[directiveOrProperty] === 'function') {
                    let operation = OPERATION_MAP[directiveOrProperty](this);
                    operation.run([templateGraph,(templateGraph as any)[directiveOrProperty]]);
                }
            }
            else {
                if (graphIsArray) {
                    (templatedGraph as Array<any>).push(resultingValue);
                }
                else {
                    (templatedGraph as Template)[resultingKey] = resultingValue;
                }
            }
        }
        return templatedGraph;
    }


    expression(exprString:string, scope?:{[key:string]:any}) {
        let result = exprString.split(
            this.config.scaffolding.syntax.close
        ).map(expr=>
            this.partialExpression(
                expr.indexOf(this.config.scaffolding.syntax.open)!==-1 ||
                expr.indexOf(this.config.scaffolding.syntax.dontInfer)!==-1
                    ?`${expr}${this.config.scaffolding.syntax.close}`
                    :expr,
                scope
            )
        );
        let nonComposable = result.find(r=>typeof r !== 'string');
        if (typeof nonComposable !== 'undefined') {
            return result.shift();
        }
        return result.join('');
    }

    protected partialExpression(exprString:string, scope?:{[key:string]:any}) {
        let expressionStart = exprString.indexOf(this.config.scaffolding.syntax.open);
        if (expressionStart === AWOL) expressionStart = exprString.indexOf(this.config.scaffolding.syntax.dontInfer);
        if (expressionStart !== AWOL) {
            let dontInfer = exprString[expressionStart]===this.config.scaffolding.syntax.dontInfer[0];
            let expressionEnd = exprString.lastIndexOf(this.config.scaffolding.syntax.close);
            if (expressionEnd === AWOL) throw new Error(`syntax error in expression: "${this.config.scaffolding.syntax.close}" expected\n\t${exprString}`);
            let rootExpr = exprString.substring(expressionStart+this.config.scaffolding.syntax.open.length, expressionEnd).trim();
            let filterResult = this.filter(rootExpr, scope);
            let result = (
                typeof filterResult !== 'object'
                    ? `${exprString.substring(0, expressionStart)}${filterResult}${exprString.substring(expressionEnd+this.config.scaffolding.syntax.close.length)}`
                    : filterResult
            );
            if (dontInfer) return result;
            return this.infer(result);
        }
        return exprString;
    }

    reference(expr:string, scope?:{[key:string]:any}):any {
        let scopeRef;
        if (scope) {
             scopeRef = Templater.deref(scope, expr, this.config.scaffolding.syntax.reference.delim);
        }
        return scopeRef || Templater.deref(this.template["@xform:var"], expr, this.config.scaffolding.syntax.reference.delim);
    }

    filter(expr:string, scope?:{[key:string]:any}):any {
        let filterArgsStart = expr.indexOf(this.config.scaffolding.syntax.filter.open);
        if (filterArgsStart !== AWOL) {
            let filterArgsStop = expr.lastIndexOf(this.config.scaffolding.syntax.filter.close);
            let filterRef = expr.substring(0, filterArgsStart).trim();
            let filterFunc = this.config.filters[filterRef];
            if (typeof filterFunc !== 'function') throw new Error(`syntax error in expression: "${filterRef}" is not a filter\n\t${expr}`);
            if (filterArgsStop === AWOL) throw new Error(`syntax error in filter "${filterRef}": "${this.config.scaffolding.syntax.filter.close}" expected\n\t${expr}`);
            let filterArgs = expr.substring(filterArgsStart+this.config.scaffolding.syntax.filter.open.length, filterArgsStop).trim();
            if (filterFunc) {
                let args = filterArgs.split(
                    this.config.scaffolding.syntax.filter.delim
                );
                let groupedArgs:any[] = [], opened = false, groupedArgIndex = 0;
                args.forEach(preFilteredArg=>{
                    let opening = preFilteredArg.indexOf(this.config.scaffolding.syntax.filter.open) !== AWOL;
                    let closing = preFilteredArg.indexOf(this.config.scaffolding.syntax.filter.close) !== AWOL;
                    if ( opened || opening || closing ) {
                        if (opening) opened = true;
                        if (closing) opened = false;
                    }
                    if (typeof groupedArgs[groupedArgIndex] === 'undefined') groupedArgs[groupedArgIndex] = "";
                    groupedArgs[groupedArgIndex] += (!opening&&(opened||closing)?",":"")+preFilteredArg;
                    if ( !(opened || opening) ) groupedArgIndex ++;
                });
                groupedArgs = groupedArgs.map(
                    a=>this.infer(this.filter(a.trim(), scope))
                );
                groupedArgs.unshift(this); // Inject Templater as the first arg on any filter
                return this.infer(filterFunc(groupedArgs));
            }
        }
        return this.reference(expr, scope);
    }

    infer(value:string):any {
        if (isNaN(value as any) || isNaN(parseFloat(value))) {
            switch (value) {
                case "true":return true;
                case "false":return false;
                default: return value;
            }
        }
        else return parseFloat(value);
    }
    static config(options:TemplaterConfig|any) {
        (options as TemplaterConfig).filters = {
            ... DEFAULT_FILTERS,
            ... (options as TemplaterConfig).filters
        };
        return {
            ... DEFAULT_TEMPLATE_CONFIG,
            options
        }
    }

    static deref(obj:any, path:string|string[], delim:string|RegExp='.'):any {
        if (delim instanceof RegExp)
            delim = delim.toString().replace('/','').replace('\\','');
        if (typeof path === 'string')
            path = path.split(delim);
        if (!obj) return obj;
        if (!path.length) return obj;
        return Templater.deref(obj[path.shift() as string], path, delim);
    }
}