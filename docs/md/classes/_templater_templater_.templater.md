> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["templater/templater"](../modules/_templater_templater_.md) / [Templater](_templater_templater_.templater.md) /

# Class: Templater

## Hierarchy

* **Templater**

### Index

#### Constructors

* [constructor](_templater_templater_.templater.md#constructor)

#### Properties

* [config](_templater_templater_.templater.md#config)
* [template](_templater_templater_.templater.md#template)
* [variables](_templater_templater_.templater.md#variables)
* [workingDirectory](_templater_templater_.templater.md#workingdirectory)

#### Methods

* [anchorDirectives](_templater_templater_.templater.md#protected-anchordirectives)
* [expression](_templater_templater_.templater.md#expression)
* [filter](_templater_templater_.templater.md#filter)
* [infer](_templater_templater_.templater.md#infer)
* [parse](_templater_templater_.templater.md#parse)
* [partialExpression](_templater_templater_.templater.md#protected-partialexpression)
* [reference](_templater_templater_.templater.md#reference)
* [config](_templater_templater_.templater.md#static-config)
* [deref](_templater_templater_.templater.md#static-deref)

## Constructors

###  constructor

\+ **new Templater**(`template`: *[Template](../interfaces/_templater_template_interface_.template.md)*, `config`: *[TemplaterConfig](../interfaces/_templater_templater_config_interface_.templaterconfig.md)*, `workingDirectory`: *string*): *[Templater](_templater_templater_.templater.md)*

*Defined in [templater/templater.ts:27](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L27)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`template` | [Template](../interfaces/_templater_template_interface_.template.md) | - | A root object to look for `@xform:*` directive-properties on; and tranform accordingly |
`config` | [TemplaterConfig](../interfaces/_templater_templater_config_interface_.templaterconfig.md) | DEFAULT_TEMPLATE_CONFIG | *(optional)* A table of settings used to customize templating options (see `DEFAULT_TEMPLATE_CONFIG`) |
`workingDirectory` | string | process.cwd() | *(optional)* A path (`process.cwd()` by default) to start from when resolving any filepath reference in the template  |

**Returns:** *[Templater](_templater_templater_.templater.md)*

## Properties

###  config

• **config**: *[TemplaterConfig](../interfaces/_templater_templater_config_interface_.templaterconfig.md)*

*Defined in [templater/templater.ts:36](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L36)*

*(optional)* A table of settings used to customize templating options (see `DEFAULT_TEMPLATE_CONFIG`)

___

###  template

• **template**: *[Template](../interfaces/_templater_template_interface_.template.md)*

*Defined in [templater/templater.ts:35](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L35)*

A root object to look for `@xform:*` directive-properties on; and tranform accordingly

___

###  variables

• **variables**: *object*

*Defined in [templater/templater.ts:27](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L27)*

#### Type declaration:

● \[▪ **key**: *string*\]: any

___

###  workingDirectory

• **workingDirectory**: *string*

*Defined in [templater/templater.ts:37](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L37)*

*(optional)* A path (`process.cwd()` by default) to start from when resolving any filepath reference in the template

## Methods

### `Protected` anchorDirectives

▸ **anchorDirectives**(`templateGraph`: *[Template](../interfaces/_templater_template_interface_.template.md) | `Array<any>`*): *object*

*Defined in [templater/templater.ts:53](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L53)*

Move most `@xform:*` directive-propterties to the bottom of the graph; in order of mapping

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateGraph` | [Template](../interfaces/_templater_template_interface_.template.md) \| `Array<any>` | a graph on the template object  |

**Returns:** *object*

● \[▪ **key**: *string*\]: any

___

###  expression

▸ **expression**(`exprString`: *string*, `scope?`: *undefined | object*, `keyRestrict`: *boolean*): *any*

*Defined in [templater/templater.ts:158](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L158)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`exprString` | string | - |
`scope?` | undefined \| object | - |
`keyRestrict` | boolean | false |

**Returns:** *any*

___

###  filter

▸ **filter**(`expr`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templater/templater.ts:214](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  infer

▸ **infer**(`value`: *string*): *any*

*Defined in [templater/templater.ts:249](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L249)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *any*

___

###  parse

▸ **parse**(`templateGraph?`: *[Template](../interfaces/_templater_template_interface_.template.md) | `Array<any>` | any*, `scope?`: *undefined | object*): *any*

*Defined in [templater/templater.ts:86](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L86)*

Parse a template object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateGraph?` | [Template](../interfaces/_templater_template_interface_.template.md) \| `Array<any>` \| any | The root template object if not provided; or a graph on the template object |
`scope?` | undefined \| object | - |

**Returns:** *any*

A version of the template with values resolved and operations completed

___

### `Protected` partialExpression

▸ **partialExpression**(`exprString`: *string*, `scope?`: *undefined | object*, `keyRestrict`: *boolean*): *any*

*Defined in [templater/templater.ts:179](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L179)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`exprString` | string | - |
`scope?` | undefined \| object | - |
`keyRestrict` | boolean | false |

**Returns:** *any*

___

###  reference

▸ **reference**(`expr`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templater/templater.ts:206](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

### `Static` config

▸ **config**(`options`: *[TemplaterConfig](../interfaces/_templater_templater_config_interface_.templaterconfig.md) | any*): *object*

*Defined in [templater/templater.ts:259](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L259)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [TemplaterConfig](../interfaces/_templater_templater_config_interface_.templaterconfig.md) \| any |

**Returns:** *object*

* **options**: *any*

___

### `Static` deref

▸ **deref**(`obj`: *any*, `path`: *string | string[]*, `delim`: *string | `RegExp`*, `createUndefinedPaths`: *boolean*): *any*

*Defined in [templater/templater.ts:270](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/templater/templater.ts#L270)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`obj` | any | - |
`path` | string \| string[] | - |
`delim` | string \| `RegExp` | "." |
`createUndefinedPaths` | boolean | false |

**Returns:** *any*