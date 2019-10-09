import 'jasmine';
import { Templater } from '../templater/templater';
const EvaluatesExpressionsAndMergesSample = require('../../samples/evaluates-expressions-and-merges.json');
describe('With "evaluates-expressions-and-merges" template: ',()=>{
    describe('result',()=>{

        it('evalues expressions, then merges',()=>{

            expect(
              new Templater({
                "@xform:var":{
                    "scripts":false,
                    "using":"local",
                    "empty-string":"",
                    "empty-array":[],
                    "environments":{
                      "local":{
                        "build":"yarn build"
                      },
                      "none":{},
                      "prod":{
                          "run":"yarn start"
                      }
                    },
                    "env":"environments.${using}",
                    "no-scripts":[]
                },
                "scripts":{
                  "@xform:foreach(if(scripts, environments,no-scripts))":{
                      "build:${key}":"${if(item.build,item.build,empty-string)}"
                  },
                  "${env}":"${deref(environments,using)}"
                }
              }).parse()
            ).toEqual({
                "scripts":{
                    "environments.local":{build:'yarn build'}
                }
              }
            );
        });
    });
});