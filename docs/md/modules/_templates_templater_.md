> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["templates/templater"](_templates_templater_.md) /

# External module: "templates/templater"

### Index

#### Classes

* [Templater](../classes/_templates_templater_.templater.md)

#### Variables

* [AWOL](_templates_templater_.md#const-awol)

#### Object literals

* [OPERATION_MAP](_templates_templater_.md#const-operation_map)

## Variables

### `Const` AWOL

• **AWOL**: *`-1`* =  -1

*Defined in [templates/templater.ts:11](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/templates/templater.ts#L11)*

## Object literals

### `Const` OPERATION_MAP

### ▪ **OPERATION_MAP**: *object*

*Defined in [templates/templater.ts:16](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/templates/templater.ts#L16)*

Map `Operation`s to object properites that are "directives" read (in order of mapping) by the `Templater`

###  @xform:extends

▸ **@xform:extends**(`templater`: *[Templater](../classes/_templates_templater_.templater.md)*): *[ExtendsOperation](../classes/_operations_extends_operation_.extendsoperation.md)*

*Defined in [templates/templater.ts:18](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/templates/templater.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templates_templater_.templater.md) |

**Returns:** *[ExtendsOperation](../classes/_operations_extends_operation_.extendsoperation.md)*

###  @xform:merge

▸ **@xform:merge**(`templater`: *[Templater](../classes/_templates_templater_.templater.md)*): *[MergeOperation](../classes/_operations_merge_operation_.mergeoperation.md)*

*Defined in [templates/templater.ts:19](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/templates/templater.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templates_templater_.templater.md) |

**Returns:** *[MergeOperation](../classes/_operations_merge_operation_.mergeoperation.md)*

###  @xform:remove

▸ **@xform:remove**(`templater`: *[Templater](../classes/_templates_templater_.templater.md)*): *[RemoveOperation](../classes/_operations_remove_operation_.removeoperation.md)*

*Defined in [templates/templater.ts:17](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/templates/templater.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templates_templater_.templater.md) |

**Returns:** *[RemoveOperation](../classes/_operations_remove_operation_.removeoperation.md)*

###  @xform:sort

▸ **@xform:sort**(`templater`: *[Templater](../classes/_templates_templater_.templater.md)*): *[SortOperation](../classes/_operations_sort_operation_.sortoperation.md)*

*Defined in [templates/templater.ts:20](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/templates/templater.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templates_templater_.templater.md) |

**Returns:** *[SortOperation](../classes/_operations_sort_operation_.sortoperation.md)*