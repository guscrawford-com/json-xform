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
                            "run:${item}":"tsc -c ${item}",
                            "not-thought-of:${key}":{
                                "do":"${key}"
                            }
                        },
                        "not-there":"${should-remain}"
                    },
                    set:"${foreach(set)}",
                    setB:"${foreach(setB)}",
                    setC:"${foreach(setC)}",
                    //"${foreach(setB)}":"expectip"
                } as any
            ).parse();
            //console.log(result)
            expect((result as any).set[0]).toBe('A');
            expect((result as any).scripts['not-thought-of:1'].do).toBe(1);
            expect((result as any).scripts['not-there']).toBe('${should-remain}');
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
            let res;
            expect(res = new Templater({
                "@xform:var":{
                  "production":true,
                  "development":false,
                  "another":"uat",
                  "${another}":"${another} one",
                  "build-prod":"ng build --prod",
                  "build-dev":"ng build"
                },
                "scripts":{
                  "build":"${if(gt(production,development),build-prod,build-dev)}",
                  "other":"${uat}"
                }
              }).parse()).toEqual({
                "scripts":{"build":"ng build --prod","other":"uat one"}
              });
            let result = templater.parse();
            // console.log(res);
            expect((result as any).scripts['new-build']).toBe('new-tsc');
            expect((result as any)["@xform:merge"]).toBeUndefined();

            expect(
              new Templater({
                "@xform:extends":"./sample.json",
                "@xform:var":{
                  "needed-value":"some-value"
                },
                "scripts":{
                  "run":"command"
                }
              }).parse()
            ).toEqual({
                scripts: { run: 'command' },
                'extended-properties': 'work well',
                '@but not these': '@cus of things',
                name: '@guscrawford.com/json-xform',
                "overridden-properties":"argggg",
                version: '1.4.0',
                description: 'A json transformer',
                main: 'src/json-xform.ts',
                license: 'MIT',
                repository: 'https://github.com/guscrawford-com/json-xform',
                keywords: [ 'JSON', 'transform', 'template', 'static' ],
                so: 'do some-value' }
            );

            expect(
                new Templater({
                  "@xform:import":"./sample.json",
                  "@xform:var":{
                    "needed-value":"some-value"
                  },
                  "scripts":{
                    "run":"command"
                  },
                  "overridden-properties":"work well too"
                }).parse()
              ).toEqual({
                  scripts: { run: 'command' },
                  'extended-properties': 'work well',
                  "overridden-properties":"work well too",
                  '@but not these': '@cus of things',
                  name: '@guscrawford.com/json-xform',
                  version: '1.4.0',
                  description: 'A json transformer',
                  main: 'src/json-xform.ts',
                  license: 'MIT',
                  repository: 'https://github.com/guscrawford-com/json-xform',
                  keywords: [ 'JSON', 'transform', 'template', 'static' ],
                  so: 'do not' }
              );
        });
        it('makes a proxy-config.json',()=>{
          let result = new Templater({
            "@xform:var":{
              "container-endpoint":"10.131.67.131",
              "host-endpoint":"localhost",
              "services":{
                  "ref":{ "secure":false, "port":3000 },
                  "thv":{ "secure":false, "port":3001 },
                  "intrep":{ "secure":false, "port":3003 },
                  "eventhub":{ "secure":true, "port":3004 },
                  "workflow_gateway":{ "secure":false, "port":3005 },
                  "workflow_request":{ "secure":false, "port":3006 },
                  "orc":{ "secure":false, "port":3008 },
                  "iam":{ "secure":false, "port":3009 },
                  "recon":{ "secure":false, "port":3011 },
                  "svc":{ "secure":false, "port":3013 },
                  "scheduler":{ "secure":false, "port":5002 },
                  "commonui":{ "secure":false, "port":3024 },
                  "crg":{ "secure":true, "port":3027 }
              }
            },
            "@xform:foreach(services)":{
                "/api/${key}":{
                  "target":"http://${if(item.container,container-endpoint,host-endpoint)}:${item.port}",
                  "secure":"${item.secure}",
                  "pathRewrite":{
                    "^/api/${key}":"/"
                  }
                }
            },
            "/VFI/SSNC": {
              "target": "https://dvvarap4.ssnc.global/VisionFIEngOMEGA",
              "secure": true,
              "pathRewrite": {
                "^/VFI/SSNC": "/"
              }
            },
            "changeOrigin": true
          }).parse();
          //console.log(result)
          expect(
              result['/api/ref']
          ).toEqual({ target: 'http://localhost:3000', secure: false, pathRewrite: { '^/api/ref': '/' } })
        })
    });
});