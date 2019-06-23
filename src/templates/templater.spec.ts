import 'jasmine';
import { Templater } from './templater';
describe('Templater',()=>{
    let templater:Templater;
    beforeEach(()=>{
        templater = new Templater(
            {
                "@xform:var":{
                    buildScriptName:"build",
                    buildScriptVal:"tsc"
                },
                "@xform:merge":{
                    "stanza.a":"A",
                    "stanza.b":"B",
                    "stanza2":"Stanza2",
                    "scripts.new-${buildScriptName}":"new-${buildScriptVal}"
                },
                scripts:{
                    "${buildScriptName}":"${buildScriptVal}",
                    "rebuild":"rimraf dist && ${buildScriptVal}",
                    "test":"jasmine"
                },
                stanza:{
                    a:"a"
                },
                stanza2:"stanza2"
            }
        )
    });
    describe('parse',()=>{
        it('passes-through static properties and values',()=>{
            let result = templater.parse();
            expect((result as any).scripts.test).toBe('jasmine');
        });
        it('evaluates expressions',()=>{
            let result = templater.parse();
            expect((result as any).scripts.build).toBe('tsc');
            expect((result as any).scripts.rebuild).toBe('rimraf dist && tsc');
            expect((result as any)["@xform:var"]).toBeUndefined();
        });
        it('merges',()=>{
            let result = templater.parse();
            expect((result as any).stanza.a).toBe('A');
            expect((result as any).stanza.b).toBe('B');
            expect((result as any).stanza2).toBe('Stanza2');
            expect((result as any)["@xform:merge"]).toBeUndefined();
        });
        it('evalues expressions, then merges',()=>{
            let result = templater.parse();
            expect((result as any).scripts['new-build']).toBe('new-tsc');
            expect((result as any)["@xform:merge"]).toBeUndefined();
        });
    });
});