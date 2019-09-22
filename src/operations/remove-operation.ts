import { Templater } from "../templater/templater";
import { Operation } from "./operation";

export class RemoveOperation extends Operation {
    constructor (protected templater:Templater) {
        super (templater);
    }
    run(args:any[]) {
        let target = args[0];
        let removes = args[1];
        for (let remove in removes) {
            let refs = removes[remove].split(this.templater.config.scaffolding.syntax.reference.delim);
            let removeTarget = (
                refs.length > 1
                    ? Templater.deref(target, refs.slice(0, refs.length-2 || 1))
                    : target
            );
            let lastRef = refs.slice(refs.length > 1 ?refs.length-2:0).pop() as string;
            delete removeTarget[lastRef];
        }
    }
}