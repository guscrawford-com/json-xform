> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["templater/templater-config.interface"](../modules/_templater_templater_config_interface_.md) / [TemplaterConfig](_templater_templater_config_interface_.templaterconfig.md) /

# Interface: TemplaterConfig

## Hierarchy

* **TemplaterConfig**

### Index

#### Properties

* [filters](_templater_templater_config_interface_.templaterconfig.md#filters)
* [operations](_templater_templater_config_interface_.templaterconfig.md#operations)
* [scaffolding](_templater_templater_config_interface_.templaterconfig.md#scaffolding)

## Properties

###  filters

• **filters**: *object*

*Defined in [templater/templater-config.interface.ts:65](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater-config.interface.ts#L65)*

Contains arrow functions used to transform exressions:
`(args:any[])=>any`
Where:
- args[0] is always the instance of the `Templater`
- args[1..] are the delimeter (, by default) separated filter arguments

#### Type declaration:

● \[▪ **key**: *string*\]: function

▸ (`args`: *any[]*): *any*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any[] |

___

###  operations

• **operations**: *object*

*Defined in [templater/templater-config.interface.ts:40](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater-config.interface.ts#L40)*

Controls Operations related syntax

#### Type declaration:

* **sort**(): *object*

  * **syntax**(): *object*

    * **asc**: *string*

    * **delim**: *string | `RegExp`*

    * **desc**: *string*

___

###  scaffolding

• **scaffolding**: *object*

*Defined in [templater/templater-config.interface.ts:5](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater-config.interface.ts#L5)*

Controls scaffolding options

#### Type declaration:

* **syntax**(): *object*

  * **close**: *string*

  * **dontInfer**: *string*

  * **filter**(): *object*

    * **close**: *string*

    * **delim**: *string | `RegExp`*

    * **open**: *string*

  * **open**: *string*

  * **reference**(): *object*

    * **delim**: *string | `RegExp`*