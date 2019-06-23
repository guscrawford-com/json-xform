import { Template, MergeDirectiveValue } from "./template.interface";
import { MergeOperation } from "../operations/merge-operation";
import { Operation } from "../operations/operation";
import { DEFAULT_FILTERS } from "./default-filters";
import { DEFAULT_TEMPLATE_CONFIG } from "./default-templater-config";

const AWOL = -1;

export interface TemplaterConfig {
    scaffolding:{
        syntax:{
            open:string;
            close:string;
            filter:{
                open:string;
                close:string;
                delim:string;
            },
            reference:{
                delim:string;
            }
        };
    };
    filters: {
        [key:string]:(args:any[])=>any
    }
}
const OPERATION_MAP : {[key:string]:(templater:Templater)=>Operation} = {
    "@xform:merge":(templater:Templater)=> new MergeOperation(templater)
};
export class Templater {

    constructor (
        public readonly template:Template,
        public readonly config:TemplaterConfig=DEFAULT_TEMPLATE_CONFIG
    ) { }

    /**
     * Parase a template object
     * @param templateGraph The root template object if not provided; or a graph on the template object
     * @returns A version of the template with values resolved and operations completed
     */
    parse(templateGraph?:Template|Array<any>) {
        if (!templateGraph) templateGraph = {...this.template};
        let graphIsArray = templateGraph instanceof Array;
        let templatedGraph:{[key:string]:any}|Array<any> = graphIsArray?[]:{};
        for (let directiveOrProperty in templateGraph) {
            let resultingKey = this.expression(directiveOrProperty);
            let resultingValue; 
            switch (typeof (templateGraph as any)[directiveOrProperty]) {
                case 'string':
                    resultingValue = this.expression((templateGraph as any)[directiveOrProperty]);
                    break;
                case 'object':
                    resultingValue = this.parse((templateGraph as any)[directiveOrProperty]);
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


    expression(exprString:string) {
        let expressionStart = exprString.indexOf(this.config.scaffolding.syntax.open);
        if (expressionStart !== AWOL) {
            let expressionEnd = exprString.lastIndexOf(this.config.scaffolding.syntax.close);
            if (expressionEnd === AWOL) throw new Error(`syntax error in expression: "${this.config.scaffolding.syntax.close}" expected\n\t${exprString}`);
            let rootExpr = exprString.substring(expressionStart+this.config.scaffolding.syntax.open.length, expressionEnd).trim();
            return `${exprString.substring(0, expressionStart)}${this.filter(rootExpr)}${exprString.substring(expressionEnd+this.config.scaffolding.syntax.close.length)}`;
        }
        return exprString;
    }

    reference(expr:string):any {
        return Templater.deref(this.template["@xform:var"], expr, this.config.scaffolding.syntax.reference.delim);
    }

    filter(expr:string):any {
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
                ).map(
                    a=>this.filter(a.trim())
                );
                args.unshift(this);
                return filterFunc(args);
            }
        }
        return this.reference(expr);
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

    static deref(obj:any, path:string|string[], delim:string='.'):any {
        if (typeof path === 'string')
            path = path.split(delim);
        if (!obj) return obj;
        if (!path.length) return obj;
        return Templater.deref(obj[path.shift() as string], path, delim);
    }
}