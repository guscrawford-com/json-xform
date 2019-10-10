import { Templater } from "./templater";

export const DEFAULT_FILTERS = {
    compare:(args:any[])=>{
        var templater:Templater = args[0];
        var a = args[1], b = args[2];
        return (
            a > b
                ? 1
                : (
                    a < b
                        ? -1
                        : 0
                )
        );
    },
    eq:(args:any[])=>(args[0] as Templater).config.filters.compare(args) === 0,
    lt:(args:any[])=>(args[0] as Templater).config.filters.compare(args) === -1,
    gt:(args:any[])=>(args[0] as Templater).config.filters.compare(args) === 1,
    number:(args:any[])=>{
        var templater:Templater = args[0];
        var numberAsString = args[1], roundTo = args[2] || 0;
        var val = parseFloat(numberAsString).toFixed(roundTo);
        return parseFloat(val);
    },
    not:(args:any[])=>{
        return !args[1];
    },
    if:(args:any[])=>{
        var templater:Templater = args[0];
        var conditionExpr = args[1], exprA = args[2], exprB = args[3];
        return (
            conditionExpr
                ? exprA
                : exprB
        );
    },
    // Does this not just need to return the enumerable?
    foreach:(args:any[])=>{
        var templater:Templater = args[0];
        var set = args[1];
        if (typeof set !== 'object') return [];
        return set;
        // var isArray = set instanceof Array;
        // var output = isArray ? [] : {};
        // var length = (set instanceof Array ? set.length : (typeof set === 'object' ? Object.keys(set).length : set.length));
        // var index = 0;

        // for (var key in set) {
        //     let keyInSetIsArray = set[key] instanceof Array;
        //     switch (typeof set[key]) {
        //         case 'object':
        //             if (keyInSetIsArray) (output as any[]).push(templater.parse(set[key],{...templater.template,length, index, key}));
        //             else (output as {[key:string]:any})[key] = (templater.parse(set[key],{...templater.template,length, index, key}));
        //             break;
        //         default:
        //             if (keyInSetIsArray) (output as any[]).push(templater.expression(set[key],{...templater.template,length, index, key}));
        //             else (output as {[key:string]:any})[key] = (templater.expression(set[key],{...templater.template,length, index, key}));
        //     }
        //     index ++;
        // };
        // return output;
    },
    deref:(args:any[])=>{
        var templater:Templater = args[0];
        var objA = args[1];
        var ref = args[2];
        if (typeof ref !== 'string' && typeof ref !== 'number')
            throw new Error(`run-time error evaluating filter "deref": reference expression resolved to non-key type '${typeof ref}'`);
        return templater.reference(ref as any, objA)
    }
}