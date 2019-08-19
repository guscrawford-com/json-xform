import { Templater } from "../templates/templater";
import { Operation } from "./operation";
import { MergeOperation } from "./merge-operation";
const { readFileAsync } = require("fs");
const { join } = require("path");

export class ExtendsOperation extends Operation {
    constructor (protected templater:Templater) {
        super (templater);
    }
    run(args:any[]) {
        let target = args[0];
        let extentsions = args[1];
        /*
        "@xform:extends":{//could be a string or an array of filenames and no operations
            "filename":{
                "@xform:merge":{
                    "thisn":"that"
                }
            }
        }
         */
        if (typeof extentsions === 'string') ExtendsOperation.extend(target, extentsions);
        else for (let extension in extentsions) {
            var extensionPath = extentsions[extension];
            (function(extensionPath:string){
                ExtendsOperation.extend(target, extensionPath);
            })(extensionPath)
        }
    }
    public static extend(target:any, pathRef:string) {
        var source, parsed;
        try {
            source = readFileAsync(join(process.cwd(),pathRef));
            parsed = JSON.parse(source);
        }
        catch (err) {
            console.warn(err);
        }
        if (parsed) MergeOperation.deepMerge(target, parsed)
    }
}