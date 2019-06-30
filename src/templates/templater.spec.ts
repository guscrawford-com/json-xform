import 'jasmine';
import { Templater } from './templater';
describe('Templater',()=>{
    let templater:Templater;
    beforeEach(()=>{
        templater = new Templater(
            sampleFactory()
        )
    });
    describe('parse',()=>{
        it('passes-through static properties and values',()=>{
            let result = templater.parse();
            console.log(JSON.stringify(sampleFactory(), null, '  '))
            console.log(JSON.stringify(result, null, '  '))
            expect((result as any).myArray.toString()).toBe([
                3,
                "a",
                "d",
                "z"
            ].toString())
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
        it('removes items',()=>{
            let result = templater.parse();
            expect((result as any).remove.inner).toBeUndefined();
            expect((result as any).removeThis).toBeUndefined();
        });
        it('sorts items',()=>{
            let result = templater.parse();
            expect((result as any).myArray.toString()).toBe([
                3,
                "a",
                "d",
                "z"
            ].toString());
            expect((result as any).myInnerArray.myOtherArray.map((i:any)=>i.key).toString()).toBe([
                {key:-7},
                {key:1},
                {key:4}
            ].map(i=>i.key).toString());
        });
    });
    describe('filter',()=>{
        it('eq works',()=>{
            let result = templater.parse();
            expect((result as any).filtered.shouldBeEqual).toBe(true);
        });
        it('gt / lt works',()=>{
            let result = templater.parse();
            expect((result as any).filtered.shouldLess).toBe(true);
            expect((result as any).filtered.shouldMore).toBe(true);
            expect((result as any).filtered.shouldNotBeLess).toBe(false);
            expect((result as any).filtered.shouldNotBeMore).toBe(false);
        });
        it('if works',()=>{
            let result = templater.parse();
            expect(JSON.stringify((result as any).filtered.ifVarBigIsBigger)).toBe(JSON.stringify({
                anObject:true,
                withProps:"like this"
            }));
            expect((result as any).filtered.ifVarBigIsSmaller).toBe("fore");
        });
        it('inference works',()=>{
            let result = templater.parse();
            expect(JSON.stringify((result as any).filtered.shouldMaintainObj)).toBe(
                JSON.stringify({
                    anObject:true,
                    withProps:"like this"
                })
            );
        });
    });
});

function sampleFactory () {
    return {
        "@xform:remove":{"removeThis":"removeThis","removeInnter":"remove.inner"},
        "@xform:sort":{
            "myArray":"asc",
            "myInnerArray.myOtherArray":"key desc"
        },
        "@xform:var":{
            buildScriptName:"build",
            buildScriptVal:"tsc",
            varA:"fore",
            varB:"fore",
            varC:{
                anObject:true,
                withProps:"like this"
            },
            varSmall:2,
            varBig:6
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
        stanza2:"stanza2",
        removeThis:"here",
        remove:{
            inner:"here"
        },
        myArray:[
            "z",
            "d",
            "a",
            3
        ],
        myInnerArray:{
            myOtherArray:[
                {key:4},
                {key:1},
                {key:-7}
            ]
        },
        filtered:{
            shouldBeEqual:"${eq(varA,varB)}",
            shouldLess:"${lt(varSmall,varBig)}",
            shouldMore:"${gt(varBig,varSmall)}",
            shouldNotBeLess:"${gt(varSmall,varBig)}",
            shouldNotBeMore:"${lt(varBig,varSmall)}",
            shouldMaintainObj:"${varC}",
            ifVarBigIsBigger:"${if(gt(varBig,varSmall),varC,varA)}",
            ifVarBigIsSmaller:"${if(lt(varBig,varSmall),varC,varA)}"
        }
    };
}