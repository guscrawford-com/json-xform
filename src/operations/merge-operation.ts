import { Templater } from "../templater/templater";
import { Operation } from "./operation";

export class MergeOperation extends Operation {
    constructor (protected templater:Templater) {
        super (templater);
    }
    run(args:any[]) {
        let target = args[0];
        let merges = args[1];
        for (let mergeOn in merges) {
            let refs = mergeOn.split(this.templater.config.scaffolding.syntax.reference.delim);
            let mergeTarget = (
                refs.length > 1
                    ? Templater.deref(target, refs.slice(0, refs.length-1))
                    : target
            );
            let lastRef = refs.slice(refs.length > 1 ?refs.length-2:0).pop() as string;
            typeof mergeTarget[lastRef] === 'object' && typeof merges[mergeOn] === 'object'
                ? MergeOperation.deepMerge(mergeTarget[lastRef], merges[mergeOn])
                : mergeTarget[lastRef] = merges[mergeOn]
        }
    }
    public static deepMerge(a:any, b:any) {
        for (let prop in b) {
            switch (typeof b[prop]) {
                case 'object':
                        MergeOperation.deepMerge(a[prop], b[prop]);
                    break;
                default:
                        a[prop] = b[prop];
            }
        }
    }
}