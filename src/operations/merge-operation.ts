import { Templater } from "../templates/templater";
import { Operation } from "./operation";

export class MergeOperation extends Operation {
    constructor (protected templater:Templater) {
        super (templater);
    }
    run(args:any[]) {
        let target = args[0];
        let merges = args[1];
        for (let mergeOn in merges) {
            let refs = mergeOn.split('.');
            let mergeTarget = (
                refs.length > 1
                    ? Templater.deref(target, refs.slice(0, refs.length-2 || 1))
                    : target
            );
            let lastRef = refs.slice(refs.length > 1 ?refs.length-2:0).pop() as string;
            let setTarget = (val:any)=>mergeTarget[lastRef] = val;
            typeof mergeTarget[lastRef] === 'object' && typeof merges[mergeOn] === 'object'
                ? MergeOperation.deepMerge(mergeTarget[lastRef], merges[mergeOn])
                : mergeTarget[lastRef] = merges[mergeOn]
        }
        return target;
    }
    protected static deepMerge(a:any, b:any) {
        for (let prop in a) {
            switch (typeof a[prop]) {
                case 'object':
                    MergeOperation.deepMerge(a[prop], b[prop]);
                    break;
                default:
                    a[prop] = b[prop];
            }
        }
    }
}