import { Templater } from "../templater/templater";
import { Operation } from "./operation";
import { MergeOperation } from "./merge-operation";
import { readFileSync } from 'fs';
import { join } from 'path';

export class ExtendsOperation extends Operation {
    constructor (protected templater:Templater, protected importMode=false) {
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
        if (typeof extentsions === 'string') ExtendsOperation.extend(target, join(templater.workingDirectory,extentsions), this.templater, this.importMode);
        else for (let extension in extentsions) {
            var extensionPath = extentsions[extension];
            (function(extensionPath:string, templater:Templater, importMode:boolean){
                ExtendsOperation.extend(target, join(templater.workingDirectory,extensionPath), templater, importMode);
            })(extensionPath, this.templater, this.importMode);
        }
        //console.info(target)
    }
    public static extend(target:any, pathRef:string, templater:Templater, importMode:boolean) {
        var source, fromJson, parsed;
        try {
            source = `${readFileSync(pathRef)}`;
            fromJson = JSON.parse(source);
            if (importMode)
                parsed = new Templater(fromJson, templater.config, templater.workingDirectory).parse();
            else {
                if (fromJson["@xform:var"])
                    MergeOperation.deepMerge(fromJson["@xform:var"], (templater.config as any)["@xform:var"]||{})
                parsed = new Templater(fromJson, templater.config, templater.workingDirectory).parse(fromJson)
            }
        }
        catch (err) {
            console.warn(err);
        }
        if (parsed) MergeOperation.deepMerge(target, parsed);
            //console.error(target);
    }
}