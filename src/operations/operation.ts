import { Templater } from "../templates/templater";

export abstract class Operation {
    constructor (protected templater:Templater) {}
    abstract run(args:any[]):any;
}