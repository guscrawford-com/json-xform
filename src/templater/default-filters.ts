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
    foreach:(args:any[])=>{
        var templater:Templater = args[0];
        var set = args[1];
        var output = [];
        var length = (set instanceof Array ? set.length : (typeof set === 'object' ? Object.keys(set).length : set.length));
        var index = 0;
        for (var key in set) {
            output.push(templater.parse(set[key],{...templater.template, length, index, key}));
            index ++;
        };
        return output;
    }
}