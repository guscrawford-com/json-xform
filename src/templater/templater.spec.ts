import 'jasmine';
import { Templater } from './templater';

const OmniSample = require('../../samples/omni.json');
describe('Templater',()=>{
    let templater:Templater;
    beforeEach(()=>{
        templater = new Templater(
            { ... OmniSample } as any
        )
    });
    describe('parse',()=>{
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
        it('extends other files',()=>{
            let result = new Templater({...OmniSample} as any).parse();
            // console.info('Output..')
            // console.info(result);
            expect((result as any)['extended-properties']).toBe('work well');
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
            expect((result as any).y).toBe('6')
            expect((result as any).z).toBe(6)
        });
    });
});