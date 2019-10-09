> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["templater/templater"](_templater_templater_.md) /

# External module: "templater/templater"

### Index

#### Classes

* [Templater](../classes/_templater_templater_.templater.md)

#### Variables

* [AWOL](_templater_templater_.md#const-awol)

#### Object literals

* [OPERATION_MAP](_templater_templater_.md#const-operation_map)

## Variables

### `Const` AWOL

• **AWOL**: *`-1`* =  -1

*Defined in [templater/templater.ts:12](https://github.com/guscrawford-com/json-xform/blob/97f0b14/src/templater/templater.ts#L12)*

## Object literals

### `Const` OPERATION_MAP

### ▪ **OPERATION_MAP**: *object*

*Defined in [templater/templater.ts:17](https://github.com/guscrawford-com/json-xform/blob/97f0b14/src/templater/templater.ts#L17)*

Map `Operation`s to object properites that are "directives" read (in order of mapping) by the `Templater`

###  @xform:extends

▸ **@xform:extends**(`templater`: *[Templater](../classes/_templater_templater_.templater.md)*): *[ExtendsOperation](../classes/_operations_extends_operation_.extendsoperation.md)*

*Defined in [templater/templater.ts:19](https://github.com/guscrawford-com/json-xform/blob/97f0b14/src/templater/templater.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templater_templater_.templater.md) |

**Returns:** *[ExtendsOperation](../classes/_operations_extends_operation_.extendsoperation.md)*

###  @xform:foreach

▸ **@xform:foreach**(`templater`: *[Templater](../classes/_templater_templater_.templater.md)*): *[ForEachOperation](../classes/_operations_foreach_operation_.foreachoperation.md)*

*Defined in [templater/templater.ts:20](https://github.com/guscrawford-com/json-xform/blob/97f0b14/src/templater/templater.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templater_templater_.templater.md) |

**Returns:** *[ForEachOperation](../classes/_operations_foreach_operation_.foreachoperation.md)*

###  @xform:import

▸ **@xform:import**(`templater`: *[Templater](../classes/_templater_templater_.templater.md)*): *[ExtendsOperation](../classes/_operations_extends_operation_.extendsoperation.md)*

*Defined in [templater/templater.ts:18](https://github.com/guscrawford-com/json-xform/blob/97f0b14/src/templater/templater.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templater_templater_.templater.md) |

**Returns:** *[ExtendsOperation](../classes/_operations_extends_operation_.extendsoperation.md)*

###  @xform:merge

▸ **@xform:merge**(`templater`: *[Templater](../classes/_templater_templater_.templater.md)*): *[MergeOperation](../classes/_operations_merge_operation_.mergeoperation.md)*

*Defined in [templater/templater.ts:21](https://github.com/guscrawford-com/json-xform/blob/97f0b14/src/templater/templater.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templater_templater_.templater.md) |

**Returns:** *[MergeOperation](../classes/_operations_merge_operation_.mergeoperation.md)*

###  @xform:remove

▸ **@xform:remove**(`templater`: *[Templater](../classes/_templater_templater_.templater.md)*): *[RemoveOperation](../classes/_operations_remove_operation_.removeoperation.md)*

*Defined in [templater/templater.ts:23](https://github.com/guscrawford-com/json-xform/blob/97f0b14/src/templater/templater.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templater_templater_.templater.md) |

**Returns:** *[RemoveOperation](../classes/_operations_remove_operation_.removeoperation.md)*

###  @xform:sort

▸ **@xform:sort**(`templater`: *[Templater](../classes/_templater_templater_.templater.md)*): *[SortOperation](../classes/_operations_sort_operation_.sortoperation.md)*

*Defined in [templater/templater.ts:22](https://github.com/guscrawford-com/json-xform/blob/97f0b14/src/templater/templater.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](../classes/_templater_templater_.templater.md) |

**Returns:** *[SortOperation](../classes/_operations_sort_operation_.sortoperation.md)*