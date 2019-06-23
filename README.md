# 🔀 json-xform

**@guscrawford.com/json-xform** *JSON Transform*

Manipulate JSON files statically

## Off the Cuff Example

```
const Templater = require('@guscrawford.com/json-xform);
new Templater({
  "do": "${something}",
  "@xform:var":{
    "something":"this"
  }
}).parse() === {
  "do": "this"
} === true;
```

## Develop & Contribute

```
$>yarn install
$>yarn build
$>yarn test
```