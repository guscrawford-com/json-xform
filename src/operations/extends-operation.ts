import { Templater } from "../templates/templater";
import { Operation } from "./operation";
import { MergeOperation } from "./merge-operation";
import { readFileSync } from 'fs';
import { join } from 'path';

export class ExtendsOperation extends Operation {
    constructor (protected templater:Templater) {
        super (templater);
    }
    run(args:any[]) {
        const templater = this.templater;
        const target = args[0];
        const extentsions = args[1];
        /*
        "@xform:extends":{//could be a string or an array of filenames and no operations
            "filename":{
                "@xform:merge":{
                    "thisn":"that"
                }
            }
        }
         */
        if (typeof extentsions === 'string') ExtendsOperation.extend(target, join(templater.workingDirectory,extentsions), this.templater);
        else for (let extension in extentsions) {
            var extensionPath = extentsions[extension];
            (function(extensionPath:string, templater:Templater){
                ExtendsOperation.extend(target, join(templater.workingDirectory,extensionPath), templater);
            })(extensionPath, this.templater);
        }
        //console.info(target)
    }
    public static extend(target:any, pathRef:string, templater:Templater) {
        var source, parsed;
        try {
            source = `${readFileSync(pathRef)}`;
            console.info(JSON.parse(source));
            parsed = new Templater(JSON.parse(source), templater.config, templater.workingDirectory).parse();
        }
        catch (err) {
            console.warn(err);
        }
        if (parsed) MergeOperation.deepMerge(target, parsed);
    }
}