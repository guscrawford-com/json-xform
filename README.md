# 🔀 json-xform
## 📃 [Docs](./docs/md/README.md)

**@guscrawford.com/json-xform** *JSON Transform*

Manipulate JSON files statically

*See [@guscrawford.com/json-xform-cli](https://www.npmjs.com/package/@guscrawford.com/json-xform-cli) for the command-line wrapper*

----

## Off the Cuff Example

***⚠ Important: Doesn't work as intended if `@xform:*` directives aren't at beginning***

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
....{
  "@xform:remove": {
    "removeThis": "removeThis",
    "removeInnter": "remove.inner"
  },
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
    "varBig": 6
  },
  "@xform:merge": {
    "stanza.a": "A",
    "stanza.b": "B",
    "stanza2": "Stanza2",
    "scripts.new-${buildScriptName}": "new-${buildScriptVal}"
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
  }
}
```

**Output**

```
{
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
  }
}
```


## Develop & Contribute

```
$>yarn install
$>yarn build
$>yarn test
```