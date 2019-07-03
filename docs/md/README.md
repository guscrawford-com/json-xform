> **[@guscrawford.com/json-xform](README.md)**

[Globals](globals.md) /

# 🔀 json-xform

## 📃 [Docs](./docs/md/README.md)

**@guscrawford.com/json-xform** *JSON Transform*

Manipulate JSON files statically

*See [@guscrawford.com/json-xform-cli](https://www.npmjs.com/package/@guscrawford.com/json-xform-cli) for the command-line wrapper*

----

## Off the Cuff Example

***⚠ Important: The `foreach` filter and nested directives are in testing...***

```
const Templater = require('@guscrawford.com/json-xform);
new Templater({
  "@xform:var":{
    "something":"this"
  },
  "do": "${something}"
}).parse() === {
  "do": "this"
} === true;
```

## More Complex Example

**Input**

```
<<<<<<< HEAD
....{
  "@xform:remove": {
    "removeThis": "removeThis",
    "removeInnter": "remove.inner"
=======
....
{
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
      varBig:6,
      libs:[
          "ui",
          "api",
          {"@xform:merge":{
              "practicalScripts.${buildScriptName}-${buildScriptVal} (${index})":"tsc -p ${buildScriptName}/${buildScriptVal}"
          },practicalScripts:{}}
      ]
  },
  "@xform:merge":{
      "stanza.a":"A",
      "stanza.b":"B",
      "stanza2":"Stanza2",
      "scripts.new-${buildScriptName}":"new-${buildScriptVal}",
      "merge.super.deep":'deeper-yet'
  },
  otherScripts:{
      "${buildScriptName}-${buildScriptVal}":"tsc -p ${buildScriptName}/${buildScriptVal}"
  },
  scripts:{
      "${buildScriptName}":"${buildScriptVal}",
      "rebuild":"rimraf dist && ${buildScriptVal}",
      "test":"jasmine"
  },
  stanza:{
      a:"a"
  },
  w:1,
  x:"1",
  y:"@{varBig}",
  z:"${varBig}",
  stanza2:"stanza2",
  removeThis:"here",
  remove:{
      inner:"here"
>>>>>>> release/1.1.0-beta
  },
  merge:{
      super:{
      }
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
  },
  practicalScripts:{
      "testEarly":"${foreach(libs)}"
  },
  "@xform:remove":{"removeThis":"removeThis","removeInnter":"remove.inner"}
}
```

**Output**

```
{
  "@xform:sort": {
    "myArray": "asc",
    "myInnerArray.myOtherArray": "key desc"
  },
  "@xform:var": {
    "buildScriptName": "build",
    "buildScriptVal": "tsc",
    "varA": "fore",
    "varB": "fore",
    "varC": {
      "anObject": true,
      "withProps": "like this"
    },
    "varSmall": 2,
    "varBig": 6,
    "libs": [
      "ui",
      "api",
      {
        "@xform:merge": {
          "practicalScripts.${buildScriptName}-${buildScriptVal} (${index})": "tsc -p ${buildScriptName}/${buildScriptVal}"
        },
        "practicalScripts": {}
      }
    ]
  },
  "@xform:merge": {
    "stanza.a": "A",
    "stanza.b": "B",
    "stanza2": "Stanza2",
    "scripts.new-${buildScriptName}": "new-${buildScriptVal}",
    "merge.super.deep": "deeper-yet"
  },
  "otherScripts": {
    "${buildScriptName}-${buildScriptVal}": "tsc -p ${buildScriptName}/${buildScriptVal}"
  },
  "scripts": {
    "${buildScriptName}": "${buildScriptVal}",
    "rebuild": "rimraf dist && ${buildScriptVal}",
    "test": "jasmine"
  },
  "stanza": {
    "a": "a"
  },
  "w": 1,
  "x": "1",
  "y": "@{varBig}",
  "z": "${varBig}",
  "stanza2": "stanza2",
  "removeThis": "here",
  "remove": {
    "inner": "here"
  },
  "merge": {
    "super": {}
  },
  "myArray": [
    "z",
    "d",
    "a",
    3
  ],
  "myInnerArray": {
    "myOtherArray": [
      {
        "key": 4
      },
      {
        "key": 1
      },
      {
        "key": -7
      }
    ]
  },
  "filtered": {
    "shouldBeEqual": "${eq(varA,varB)}",
    "shouldLess": "${lt(varSmall,varBig)}",
    "shouldMore": "${gt(varBig,varSmall)}",
    "shouldNotBeLess": "${gt(varSmall,varBig)}",
    "shouldNotBeMore": "${lt(varBig,varSmall)}",
    "shouldMaintainObj": "${varC}",
    "ifVarBigIsBigger": "${if(gt(varBig,varSmall),varC,varA)}",
    "ifVarBigIsSmaller": "${if(lt(varBig,varSmall),varC,varA)}"
  },
  "practicalScripts": {
    "testEarly": "${foreach(libs)}"
  },
  "@xform:remove": {
    "removeThis": "removeThis",
    "removeInnter": "remove.inner"
  }
}
{
  "otherScripts": {
    "build-tsc": "tsc -p build/tsc"
  },
  "scripts": {
    "build": "tsc",
    "rebuild": "rimraf dist && tsc",
    "test": "jasmine",
    "new-build": "new-tsc"
  },
  "stanza": {
    "a": "A",
    "b": "B"
  },
  "w": 1,
  "x": "1",
  "y": "6",
  "z": 6,
  "stanza2": "Stanza2",
  "remove": {},
  "merge": {
    "super": {
      "deep": "deeper-yet"
    }
  },
  "myArray": [
    3,
    "a",
    "d",
    "z"
  ],
  "myInnerArray": {
    "myOtherArray": [
      {
        "key": -7
      },
      {
        "key": 1
      },
      {
        "key": 4
      }
    ]
  },
  "filtered": {
    "shouldBeEqual": true,
    "shouldLess": true,
    "shouldMore": true,
    "shouldNotBeLess": false,
    "shouldNotBeMore": false,
    "shouldMaintainObj": {
      "anObject": true,
      "withProps": "like this"
    },
    "ifVarBigIsBigger": {
      "anObject": true,
      "withProps": "like this"
    },
    "ifVarBigIsSmaller": "fore"
  },
  "practicalScripts": {
    "testEarly": [
      "ui",
      "api",
      {
        "practicalScripts": {
          "build-tsc (2)": "tsc -p build/tsc"
        }
      }
    ]
  }
}
```

## Develop & Contribute

```
$>yarn install
$>yarn build
$>yarn test
```