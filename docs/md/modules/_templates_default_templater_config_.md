> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["templates/default-templater-config"](_templates_default_templater_config_.md) /

# External module: "templates/default-templater-config"

### Index

#### Object literals

* [DEFAULT_TEMPLATE_CONFIG](_templates_default_templater_config_.md#const-default_template_config)

## Object literals

### `Const` DEFAULT_TEMPLATE_CONFIG

### ▪ **DEFAULT_TEMPLATE_CONFIG**: *object*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/default-templater-config.ts:4](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/default-templater-config.ts#L4)*
=======
*Defined in [templates/default-templater-config.ts:4](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/default-templater-config.ts#L4)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/default-templater-config.ts:4](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/default-templater-config.ts#L4)*
>>>>>>> develop

###  filters

• **filters**: *object* =  DEFAULT_FILTERS

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/default-templater-config.ts:29](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/default-templater-config.ts#L29)*
=======
*Defined in [templates/default-templater-config.ts:29](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/default-templater-config.ts#L29)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/default-templater-config.ts:29](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/default-templater-config.ts#L29)*
>>>>>>> develop

#### Type declaration:

* **compare**(`args`: *any[]*): *`1` | `-1` | `0`*

* **eq**(`args`: *any[]*): *boolean*

* **foreach**(`args`: *any[]*): *any[]*

* **gt**(`args`: *any[]*): *boolean*

* **if**(`args`: *any[]*): *any*

* **lt**(`args`: *any[]*): *boolean*

* **not**(`args`: *any[]*): *boolean*

* **number**(`args`: *any[]*): *number*

▪ **operations**: *object*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/default-templater-config.ts:20](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/default-templater-config.ts#L20)*
=======
*Defined in [templates/default-templater-config.ts:20](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/default-templater-config.ts#L20)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/default-templater-config.ts:20](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/default-templater-config.ts#L20)*
>>>>>>> develop

* **sort**: *object*

  * **syntax**: *object*

    * **asc**: *string* = "asc"

    * **delim**: *`RegExp`* = /\s/

    * **desc**: *string* = "desc"

▪ **scaffolding**: *object*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/default-templater-config.ts:5](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/default-templater-config.ts#L5)*
=======
*Defined in [templates/default-templater-config.ts:5](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/default-templater-config.ts#L5)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/default-templater-config.ts:5](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/default-templater-config.ts#L5)*
>>>>>>> develop

* **syntax**: *object*

  * **close**: *string* = "}"

  * **dontInfer**: *string* = "@{"

  * **open**: *string* = "${"

  * **filter**: *object*

    * **close**: *string* = ")"

    * **delim**: *string* = ","

    * **open**: *string* = "("

  * **reference**: *object*

    * **delim**: *string* = "."