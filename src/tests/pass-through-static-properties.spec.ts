import 'jasmine';
import { Templater } from '../templater/templater';
describe('With "static-and-pass-through.json" template: ',()=>{
    let templater:Templater;
    const StaticAndPassThroughSample = require('../../samples/static-and-pass-through.json');
    beforeEach(()=>{
        // console.log(`"static-and-pass-through.json" template:`)
        // console.log(JSON.stringify(StaticAndPassThroughSample, null, '  '))
        templater = new Templater(
            { ... StaticAndPassThroughSample } as any
        )
    });
    describe('parse',()=>{
        it('passes-through static properties and values',()=>{
            let result = templater.parse();
            // console.log(JSON.stringify(result, null, '  '))
            
            expect((result as any).w).toBe(1);
            expect((result as any).x).toBe('1');
            expect((result as any).scripts.test).toBe('jasmine');
        });

    });

});
