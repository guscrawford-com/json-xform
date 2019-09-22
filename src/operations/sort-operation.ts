import { Templater } from "../templater/templater";
import { Operation } from "./operation";

export class SortOperation extends Operation {
    constructor (protected templater:Templater) {
        super (templater);
    }
    run(args:any[]) {
        let target = args[0];
        let sorts = args[1];
        for (let sorting in sorts) {
            let directive = sorts[sorting].split(this.templater.config.operations.sort.syntax.delim);
            let direction = directive[1] || 'asc';
            let sortOnRefs = directive[0].split(this.templater.config.scaffolding.syntax.reference.delim);
            if (
                sortOnRefs[0] === this.templater.config.operations.sort.syntax.asc ||
                    sortOnRefs[0] === this.templater.config.operations.sort.syntax.desc
            ) {
                direction = sortOnRefs[0];
                sortOnRefs = [""];
            }
            let refs = sorting.split(this.templater.config.scaffolding.syntax.reference.delim);
            let sortTarget = (
                refs.length > 1
                    ? Templater.deref(target, refs.slice(0, refs.length-2 || 1))
                    : target
            );
            let lastRef = refs.slice(refs.length > 1 ?refs.length-2:0).pop() as string;
            sortTarget[lastRef] = this.doSort(sortTarget[lastRef], sortOnRefs, direction===this.templater.config.operations.sort.syntax.asc);
        }
        return target;
    }

    protected doSort(objectOrArray:object|any[], sortOnRefs:string[], asc:boolean) {
        var isArray = objectOrArray instanceof Array;
        var generalSort = (sortOnRefs:string[]) => (a:any,b:any)=> {
            var A = this.sortByRef(a, sortOnRefs), B = this.sortByRef(b, sortOnRefs);
            return (
                A > B
                ? 1 :(
                    B > A
                    ? -1: 0
                )
            )
        };
        var result = (
            isArray
                ? (objectOrArray as Array<any>).sort(sortOnRefs && sortOnRefs[0]?generalSort(sortOnRefs):undefined)
                : Object.keys(objectOrArray).map(
                    key=>{
                        return {
                            key:key,
                            value:(objectOrArray as any)[key]
                        }
                    }
                ).sort(
                    generalSort(['value'].concat(sortOnRefs))
                )
        );
        result = (
            asc
                ? result
                : result.reverse()
        );
        var reOrderedObject = {};
        if (!isArray) result.forEach((kvp:{key:string,value:any})=>(reOrderedObject as any)[kvp.key]=kvp.value)
        return (
            isArray
                ? result
                : reOrderedObject
        );
    }

    protected sortByRef(sorting:any, sortOnRefs:string[]) {
        if (sortOnRefs && sortOnRefs[0] && typeof sorting === 'object' && !(sorting instanceof Array)) {
            return Templater.deref(sorting, sortOnRefs, this.templater.config.scaffolding.syntax.reference.delim)
        }
        return sorting;
    }
}