import { Templater } from "../templater/templater";
import { Operation } from "./operation";
import { MergeOperation } from "./merge-operation";

export class ForEachOperation extends Operation {
    constructor (protected templater:Templater) {
        super (templater);
    }
    run(args:any[]) {
        let target = args[0];
        let merges = args[1];
        let scope = args[2];
        for (let mergeOn in merges) {
            for (let itemKey in scope) {
                const mapScope =  (ref:string)=>this.templater.expression(ref, innerScope, true);
                let innerScope = {...this.templater.template, item: scope[itemKey], index:isNaN(itemKey as any)?itemKey:parseInt(itemKey), key:itemKey.toString()}
                let refs = mergeOn.split(this.templater.config.scaffolding.syntax.reference.delim).map(mapScope);

                let mergeTarget = (
                    refs.length > 1
                        ? Templater.deref(target, refs.slice(0, refs.length-1), this.templater.config.scaffolding.syntax.reference.delim, true)
                        : target
                );
                let lastRef = refs.slice(refs.length > 1 ?refs.length-2:0).pop() as string;
                typeof mergeTarget[lastRef] === 'object' && typeof merges[mergeOn] === 'object'
                    ? MergeOperation.deepMerge(mergeTarget[lastRef], this.templater.parse(merges[mergeOn], innerScope))
                    : mergeTarget[lastRef] = typeof merges[mergeOn] === 'object'?this.templater.parse(merges[mergeOn], innerScope):this.templater.expression(merges[mergeOn], innerScope);
            }
        }
    }
}