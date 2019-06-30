> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["templates/templater.spec"](_templates_templater_spec_.md) /

# External module: "templates/templater.spec"

### Index

#### Functions

* [sampleFactory](_templates_templater_spec_.md#samplefactory)

## Functions

###  sampleFactory

▸ **sampleFactory**(): *object*

*Defined in [templates/templater.spec.ts:98](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.spec.ts#L98)*

**Returns:** *object*

* **myArray**: *string | number[]* = [
            "z",
            "d",
            "a",
            3
        ]

* **removeThis**: *string* = "here"

* **stanza2**: *string* = "stanza2"

* **w**: *number* = 1

* **x**: *string* = "1"

* **y**: *string* = "@{varBig}"

* **z**: *string* = "${varBig}"

* ### **@xform:merge**: *object*

  * **scripts.new-${buildScriptName}**: *string* = "new-${buildScriptVal}"

  * **stanza.a**: *string* = "A"

  * **stanza.b**: *string* = "B"

  * **stanza2**: *string* = "Stanza2"

* ### **@xform:remove**: *object*

  * **removeInnter**: *string* = "remove.inner"

  * **removeThis**: *string* = "removeThis"

* ### **@xform:sort**: *object*

  * **myArray**: *string* = "asc"

  * **myInnerArray.myOtherArray**: *string* = "key desc"

* ### **@xform:var**: *object*

  * **buildScriptName**: *string* = "build"

  * **buildScriptVal**: *string* = "tsc"

  * **varA**: *string* = "fore"

  * **varB**: *string* = "fore"

  * **varBig**: *number* = 6

  * **varSmall**: *number* = 2

  * **varC**: *object*

    * **anObject**: *boolean* = true

    * **withProps**: *string* = "like this"

* ### **filtered**: *object*

  * **ifVarBigIsBigger**: *string* = "${if(gt(varBig,varSmall),varC,varA)}"

  * **ifVarBigIsSmaller**: *string* = "${if(lt(varBig,varSmall),varC,varA)}"

  * **shouldBeEqual**: *string* = "${eq(varA,varB)}"

  * **shouldLess**: *string* = "${lt(varSmall,varBig)}"

  * **shouldMaintainObj**: *string* = "${varC}"

  * **shouldMore**: *string* = "${gt(varBig,varSmall)}"

  * **shouldNotBeLess**: *string* = "${gt(varSmall,varBig)}"

  * **shouldNotBeMore**: *string* = "${lt(varBig,varSmall)}"

* ### **myInnerArray**: *object*

  * **myOtherArray**: *object[]* = [
                {key:4},
                {key:1},
                {key:-7}
            ]

* ### **remove**: *object*

  * **inner**: *string* = "here"

* ### **scripts**: *object*

  * **${buildScriptName}**: *string* = "${buildScriptVal}"

  * **rebuild**: *string* = "rimraf dist && ${buildScriptVal}"

  * **test**: *string* = "jasmine"

* ### **stanza**: *object*

  * **a**: *string* = "a"