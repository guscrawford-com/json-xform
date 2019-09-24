import { Templater } from "../templater/templater";

export abstract class Operation {
    constructor (protected templater:Templater) {}
    /**
     * 
     * @param args **`Operation` Injectables**
     * - `[0]` : usually the target object / reference to manipulate
     * - `[1]` : the first "argument" in this form: `{"<at>xform:<operation>":<argument>}`
     * - `[n > 1]` : see specific `Operation` implementation / docs
     */
    abstract run(args:any[]):any;
}