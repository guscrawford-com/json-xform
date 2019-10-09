> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["operations/sort-operation"](../modules/_operations_sort_operation_.md) / [SortOperation](_operations_sort_operation_.sortoperation.md) /

# Class: SortOperation

## Hierarchy

* [Operation](_operations_operation_.operation.md)

  * **SortOperation**

### Index

#### Constructors

* [constructor](_operations_sort_operation_.sortoperation.md#constructor)

#### Properties

* [templater](_operations_sort_operation_.sortoperation.md#protected-templater)

#### Methods

* [doSort](_operations_sort_operation_.sortoperation.md#protected-dosort)
* [run](_operations_sort_operation_.sortoperation.md#run)
* [sortByRef](_operations_sort_operation_.sortoperation.md#protected-sortbyref)

## Constructors

###  constructor

\+ **new SortOperation**(`templater`: *[Templater](_templater_templater_.templater.md)*): *[SortOperation](_operations_sort_operation_.sortoperation.md)*

*Overrides [Operation](_operations_operation_.operation.md).[constructor](_operations_operation_.operation.md#constructor)*

*Defined in [operations/sort-operation.ts:4](https://github.com/guscrawford-com/json-xform/blob/adb43d7/src/operations/sort-operation.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](_templater_templater_.templater.md) |

**Returns:** *[SortOperation](_operations_sort_operation_.sortoperation.md)*

## Properties

### `Protected` templater

• **templater**: *[Templater](_templater_templater_.templater.md)*

*Overrides [Operation](_operations_operation_.operation.md).[templater](_operations_operation_.operation.md#protected-templater)*

*Defined in [operations/sort-operation.ts:5](https://github.com/guscrawford-com/json-xform/blob/adb43d7/src/operations/sort-operation.ts#L5)*

## Methods

### `Protected` doSort

▸ **doSort**(`objectOrArray`: *object | any[]*, `sortOnRefs`: *string[]*, `asc`: *boolean*): *object*

*Defined in [operations/sort-operation.ts:35](https://github.com/guscrawford-com/json-xform/blob/adb43d7/src/operations/sort-operation.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`objectOrArray` | object \| any[] |
`sortOnRefs` | string[] |
`asc` | boolean |

**Returns:** *object*

___

###  run

▸ **run**(`args`: *any[]*): *any*

*Overrides [Operation](_operations_operation_.operation.md).[run](_operations_operation_.operation.md#abstract-run)*

*Defined in [operations/sort-operation.ts:8](https://github.com/guscrawford-com/json-xform/blob/adb43d7/src/operations/sort-operation.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any[] |

**Returns:** *any*

___

### `Protected` sortByRef

▸ **sortByRef**(`sorting`: *any*, `sortOnRefs`: *string[]*): *any*

*Defined in [operations/sort-operation.ts:75](https://github.com/guscrawford-com/json-xform/blob/adb43d7/src/operations/sort-operation.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`sorting` | any |
`sortOnRefs` | string[] |

**Returns:** *any*