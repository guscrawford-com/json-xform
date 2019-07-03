> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["templates/templater"](../modules/_templates_templater_.md) / [Templater](_templates_templater_.templater.md) /

# Class: Templater

## Hierarchy

* **Templater**

### Index

#### Constructors

* [constructor](_templates_templater_.templater.md#constructor)

#### Properties

* [config](_templates_templater_.templater.md#config)
* [template](_templates_templater_.templater.md#template)

#### Methods

* [anchorDirectives](_templates_templater_.templater.md#protected-anchordirectives)
* [expression](_templates_templater_.templater.md#expression)
* [filter](_templates_templater_.templater.md#filter)
* [infer](_templates_templater_.templater.md#infer)
* [parse](_templates_templater_.templater.md#parse)
* [partialExpression](_templates_templater_.templater.md#protected-partialexpression)
* [reference](_templates_templater_.templater.md#reference)
* [config](_templates_templater_.templater.md#static-config)
* [deref](_templates_templater_.templater.md#static-deref)

## Constructors

###  constructor

\+ **new Templater**(`template`: *[Template](../interfaces/_templates_template_interface_.template.md)*, `config`: *[TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md)*): *[Templater](_templates_templater_.templater.md)*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:21](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L21)*
=======
*Defined in [templates/templater.ts:22](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L22)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:22](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L22)*
>>>>>>> develop

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`template` | [Template](../interfaces/_templates_template_interface_.template.md) | - |
`config` | [TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md) | DEFAULT_TEMPLATE_CONFIG |

**Returns:** *[Templater](_templates_templater_.templater.md)*

## Properties

###  config

• **config**: *[TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md)*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:25](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L25)*
=======
*Defined in [templates/templater.ts:26](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L26)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:26](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L26)*
>>>>>>> develop

___

###  template

• **template**: *[Template](../interfaces/_templates_template_interface_.template.md)*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:24](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L24)*
=======
*Defined in [templates/templater.ts:25](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L25)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:25](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L25)*
>>>>>>> develop

## Methods

### `Protected` anchorDirectives

▸ **anchorDirectives**(`templateGraph`: *[Template](../interfaces/_templates_template_interface_.template.md) | `Array<any>`*): *object*

*Defined in [templates/templater.ts:31](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`templateGraph` | [Template](../interfaces/_templates_template_interface_.template.md) \| `Array<any>` |

**Returns:** *object*

___

###  expression

▸ **expression**(`exprString`: *string*, `scope?`: *undefined | object*): *any*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:71](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L71)*
=======
*Defined in [templates/templater.ts:82](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L82)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:82](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L82)*
>>>>>>> develop

**Parameters:**

Name | Type |
------ | ------ |
`exprString` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  filter

▸ **filter**(`expr`: *string*, `scope?`: *undefined | object*): *any*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:95](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L95)*
=======
*Defined in [templates/templater.ts:129](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L129)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:129](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L129)*
>>>>>>> develop

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  infer

▸ **infer**(`value`: *string*): *any*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:130](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L130)*
=======
*Defined in [templates/templater.ts:164](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L164)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:164](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L164)*
>>>>>>> develop

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *any*

___

###  parse

▸ **parse**(`templateGraph?`: *[Template](../interfaces/_templates_template_interface_.template.md) | `Array<any>` | any*, `scope?`: *undefined | object*): *any*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:36](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L36)*
=======
*Defined in [templates/templater.ts:45](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L45)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:45](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L45)*
>>>>>>> develop

Parase a template object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateGraph?` | [Template](../interfaces/_templates_template_interface_.template.md) \| `Array<any>` \| any | The root template object if not provided; or a graph on the template object |
`scope?` | undefined \| object | - |

**Returns:** *any*

A version of the template with values resolved and operations completed

___

### `Protected` partialExpression

▸ **partialExpression**(`exprString`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templates/templater.ts:101](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`exprString` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  reference

▸ **reference**(`expr`: *string*, `scope?`: *undefined | object*): *any*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:91](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L91)*
=======
*Defined in [templates/templater.ts:121](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L121)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:121](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L121)*
>>>>>>> develop

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

### `Static` config

▸ **config**(`options`: *[TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md) | any*): *object*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:140](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L140)*
=======
*Defined in [templates/templater.ts:174](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L174)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:174](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L174)*
>>>>>>> develop

**Parameters:**

Name | Type |
------ | ------ |
`options` | [TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md) \| any |

**Returns:** *object*

* **options**: *any*

___

### `Static` deref

▸ **deref**(`obj`: *any*, `path`: *string | string[]*, `delim`: *string | `RegExp`*): *any*

<<<<<<< HEAD
<<<<<<< HEAD
*Defined in [templates/templater.ts:151](https://github.com/guscrawford-com/json-xform/blob/bfbdcca/src/templates/templater.ts#L151)*
=======
*Defined in [templates/templater.ts:185](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L185)*
>>>>>>> release/1.1.0-beta
=======
*Defined in [templates/templater.ts:185](https://github.com/guscrawford-com/json-xform/blob/15c4a14/src/templates/templater.ts#L185)*
>>>>>>> develop

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`obj` | any | - |
`path` | string \| string[] | - |
`delim` | string \| `RegExp` | "." |

**Returns:** *any*