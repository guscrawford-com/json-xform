> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["templater/default-templater-config"](_templater_default_templater_config_.md) /

# External module: "templater/default-templater-config"

### Index

#### Object literals

* [DEFAULT_TEMPLATE_CONFIG](_templater_default_templater_config_.md#const-default_template_config)

## Object literals

### `Const` DEFAULT_TEMPLATE_CONFIG

### ▪ **DEFAULT_TEMPLATE_CONFIG**: *object*

*Defined in [templater/default-templater-config.ts:4](https://github.com/guscrawford-com/json-xform/blob/c9d079f/src/templater/default-templater-config.ts#L4)*

###  filters

• **filters**: *object* =  DEFAULT_FILTERS

*Defined in [templater/default-templater-config.ts:29](https://github.com/guscrawford-com/json-xform/blob/c9d079f/src/templater/default-templater-config.ts#L29)*

#### Type declaration:

* **compare**(`args`: *any[]*): *`1` | `-1` | `0`*

* **deref**(`args`: *any[]*): *any*

* **eq**(`args`: *any[]*): *boolean*

* **foreach**(`args`: *any[]*): *any*

* **gt**(`args`: *any[]*): *boolean*

* **if**(`args`: *any[]*): *any*

* **lt**(`args`: *any[]*): *boolean*

* **not**(`args`: *any[]*): *boolean*

* **number**(`args`: *any[]*): *number*

▪ **operations**: *object*

*Defined in [templater/default-templater-config.ts:20](https://github.com/guscrawford-com/json-xform/blob/c9d079f/src/templater/default-templater-config.ts#L20)*

* **sort**: *object*

  * **syntax**: *object*

    * **asc**: *string* = "asc"

    * **delim**: *`RegExp`* = /\s/

    * **desc**: *string* = "desc"

▪ **scaffolding**: *object*

*Defined in [templater/default-templater-config.ts:5](https://github.com/guscrawford-com/json-xform/blob/c9d079f/src/templater/default-templater-config.ts#L5)*

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