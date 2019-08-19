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

*Defined in [templates/templater.ts:21](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`template` | [Template](../interfaces/_templates_template_interface_.template.md) | - |
`config` | [TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md) | DEFAULT_TEMPLATE_CONFIG |

**Returns:** *[Templater](_templates_templater_.templater.md)*

## Properties

###  config

• **config**: *[TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md)*

*Defined in [templates/templater.ts:25](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L25)*

___

###  template

• **template**: *[Template](../interfaces/_templates_template_interface_.template.md)*

*Defined in [templates/templater.ts:24](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L24)*

## Methods

### `Protected` anchorDirectives

▸ **anchorDirectives**(`templateGraph`: *[Template](../interfaces/_templates_template_interface_.template.md) | `Array<any>`*): *object*

*Defined in [templates/templater.ts:30](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`templateGraph` | [Template](../interfaces/_templates_template_interface_.template.md) \| `Array<any>` |

**Returns:** *object*

___

###  expression

▸ **expression**(`exprString`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templates/templater.ts:83](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`exprString` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  filter

▸ **filter**(`expr`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templates/templater.ts:130](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  infer

▸ **infer**(`value`: *string*): *any*

*Defined in [templates/templater.ts:165](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *any*

___

###  parse

▸ **parse**(`templateGraph?`: *[Template](../interfaces/_templates_template_interface_.template.md) | `Array<any>` | any*, `scope?`: *undefined | object*): *any*

*Defined in [templates/templater.ts:44](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L44)*

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

*Defined in [templates/templater.ts:102](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`exprString` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  reference

▸ **reference**(`expr`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templates/templater.ts:122](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

### `Static` config

▸ **config**(`options`: *[TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md) | any*): *object*

*Defined in [templates/templater.ts:175](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [TemplaterConfig](../interfaces/_templates_templater_config_interface_.templaterconfig.md) \| any |

**Returns:** *object*

* **options**: *any*

___

### `Static` deref

▸ **deref**(`obj`: *any*, `path`: *string | string[]*, `delim`: *string | `RegExp`*): *any*

*Defined in [templates/templater.ts:186](https://github.com/guscrawford-com/json-xform/blob/a872c08/src/templates/templater.ts#L186)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`obj` | any | - |
`path` | string \| string[] | - |
`delim` | string \| `RegExp` | "." |

**Returns:** *any*