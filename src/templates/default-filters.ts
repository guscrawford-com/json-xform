import { Templater } from "./templater";

export const DEFAULT_FILTERS = {
    compare:(args:any[])=>{
        let templater:Templater = args[0];
        let a = args[1], b = args[2];
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
        let templater:Templater = args[0];
        let numberAsString = args[1], roundTo = args[2] || 0;
        let val = parseFloat(numberAsString).toFixed(roundTo);
        return parseFloat(val);
    },
    string:(args:any[])=>{
        return args[1].toString();
    },
    not:(args:any[])=>{
        return !args[1];
    },
    if:(args:any[])=>{
        let templater:Templater = args[0];
        let conditionExpr = args[1], exprA = args[2], exprB = args[3];
        return (
            conditionExpr
                ? exprA
                : exprB
        );
    }
}