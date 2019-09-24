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

*Defined in [templater/templater.ts:23](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L23)*

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

*Defined in [templater/templater.ts:33](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L33)*

*(optional)* A table of settings used to customize templating options (see `DEFAULT_TEMPLATE_CONFIG`)

___

###  template

• **template**: *[Template](../interfaces/_templater_template_interface_.template.md)*

*Defined in [templater/templater.ts:32](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L32)*

A root object to look for `@xform:*` directive-properties on; and tranform accordingly

___

###  workingDirectory

• **workingDirectory**: *string*

*Defined in [templater/templater.ts:34](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L34)*

*(optional)* A path (`process.cwd()` by default) to start from when resolving any filepath reference in the template

## Methods

### `Protected` anchorDirectives

▸ **anchorDirectives**(`templateGraph`: *[Template](../interfaces/_templater_template_interface_.template.md) | `Array<any>`*): *object*

*Defined in [templater/templater.ts:50](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L50)*

Move all `@xform:*` directive-propterties to the top of the graph; in order of mapping

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateGraph` | [Template](../interfaces/_templater_template_interface_.template.md) \| `Array<any>` | a graph on the template object  |

**Returns:** *object*

● \[▪ **key**: *string*\]: any

___

###  expression

▸ **expression**(`exprString`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templater/templater.ts:133](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`exprString` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  filter

▸ **filter**(`expr`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templater/templater.ts:180](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  infer

▸ **infer**(`value`: *string*): *any*

*Defined in [templater/templater.ts:215](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *any*

___

###  parse

▸ **parse**(`templateGraph?`: *[Template](../interfaces/_templater_template_interface_.template.md) | `Array<any>` | any*, `scope?`: *undefined | object*): *any*

*Defined in [templater/templater.ts:82](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L82)*

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

▸ **partialExpression**(`exprString`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templater/templater.ts:152](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`exprString` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

###  reference

▸ **reference**(`expr`: *string*, `scope?`: *undefined | object*): *any*

*Defined in [templater/templater.ts:172](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | string |
`scope?` | undefined \| object |

**Returns:** *any*

___

### `Static` config

▸ **config**(`options`: *[TemplaterConfig](../interfaces/_templater_templater_config_interface_.templaterconfig.md) | any*): *object*

*Defined in [templater/templater.ts:225](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [TemplaterConfig](../interfaces/_templater_templater_config_interface_.templaterconfig.md) \| any |

**Returns:** *object*

* **options**: *any*

___

### `Static` deref

▸ **deref**(`obj`: *any*, `path`: *string | string[]*, `delim`: *string | `RegExp`*, `createUndefinedPaths`: *boolean*): *any*

*Defined in [templater/templater.ts:236](https://github.com/guscrawford-com/json-xform/blob/344182c/src/templater/templater.ts#L236)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`obj` | any | - |
`path` | string \| string[] | - |
`delim` | string \| `RegExp` | "." |
`createUndefinedPaths` | boolean | false |

**Returns:** *any*