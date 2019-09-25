import 'jasmine';
import { Templater } from '../templater/templater';
const EvaluatesExpressionsAndMergesSample = require('../../samples/evaluates-expressions-and-merges.json');
describe('With "evaluates-expressions-and-merges" template: ',()=>{
    let templater:Templater;
    beforeEach(()=>{
        // console.log(`"evaluates-expressions-and-merges" template:`)
        // console.log(JSON.stringify(EvaluatesExpressionsAndMergesSample, null, '  '))
        templater = new Templater(
            { ... EvaluatesExpressionsAndMergesSample } as any
        )
    });
    describe('result',()=>{

        it('stripped @xform:var, set replacements (nested and top-level)',()=>{
            let result = templater.parse();
            expect((result as any).scripts.build).toBe('tsc');
            expect((result as any).scripts.rebuild).toBe('rimraf dist && tsc');
            expect((result as any)["@xform:var"]).toBeUndefined();
            expect((result as any).otherScripts["build-tsc"]).toBe("tsc -p build/tsc")
        });

        it('merges',()=>{
            let result = templater.parse();
            expect((result as any).stanza.a).toBe('A');
            expect((result as any).stanza.b).toBe('B');
            expect((result as any).stanza2).toBe('Stanza2');
            expect((result as any)["@xform:merge"]).toBeUndefined();
            expect((result as any).merge.super.deep).toBe('deeper-yet');
        });
        it('evalues expressions, then merges',()=>{
            let result = templater.parse();
            expect((result as any).scripts['new-build']).toBe('new-tsc');
            expect((result as any)["@xform:merge"]).toBeUndefined();
        });
    });
});
describe('With Ad-hoc Complexity',()=>{
    let templater:Templater;
    beforeEach(()=>{
        // console.log(`"evaluates-expressions-and-merges" template:`)
        // console.log(JSON.stringify(EvaluatesExpressionsAndMergesSample, null, '  '))
        templater = new Templater(
            { ... EvaluatesExpressionsAndMergesSample } as any
        )
    });
    describe('result',()=>{

        it('stripped @xform:var, set replacements (nested and top-level)',()=>{
            let result = new Templater(
                {
                    "@xform:merge":{
                        "objA.nested": "A"
                    },
                    objA:{
                        nested:"a"
                    }
                } as any
            ).parse();
            expect((result as any).objA.nested).toBe('A');
        });
        it('foreach works',()=>{
            let result = new Templater(
                {
                    "@xform:var":{
                        "a":"A",
                        "set": ["${a}","@{key}","@{index}"],
                        "setB":{"name-1":"thing-1 \"${key}\"","name-2":"thing B (${index})"},
                        "setC":[
                            {"what":"now"}
                        ],
                        "script-names":["build","test"],
                        "scripts":"${foreach(script-names)}"
                    },
                    scripts:{
                        "@xform:foreach(script-names)":{
                            "run:${item}":"tsc -c ${item}"
                        }
                    },
                    set:"${foreach(set)}",
                    setB:"${foreach(setB)}",
                    setC:"${foreach(setC)}",
                    //"${foreach(setB)}":"expectip"
                } as any
            ).parse();
            console.log(result)
            expect((result as any).set[0]).toBe('A');
        });
        it('merges',()=>{
            let result = templater.parse();
            expect((result as any).stanza.a).toBe('A');
            expect((result as any).stanza.b).toBe('B');
            expect((result as any).stanza2).toBe('Stanza2');
            expect((result as any)["@xform:merge"]).toBeUndefined();
            expect((result as any).merge.super.deep).toBe('deeper-yet');
        });
        it('evalues expressions, then merges',()=>{
            expect(new Templater({
                "@xform:var":{
                  "production":true,
                  "development":false,
                  "build-prod":"ng build --prod",
                  "build-dev":"ng build"
                },
                "scripts":{
                  "build":"${if(gt(production,development),build-prod,build-dev)}"
                }
              }).parse()).toEqual({
                "scripts":{"build":"ng build --prod"}
              });
            let result = templater.parse();
            expect((result as any).scripts['new-build']).toBe('new-tsc');
            expect((result as any)["@xform:merge"]).toBeUndefined();
        });
    });
});