> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["operations/merge-operation"](../modules/_operations_merge_operation_.md) / [MergeOperation](_operations_merge_operation_.mergeoperation.md) /

# Class: MergeOperation

## Hierarchy

* [Operation](_operations_operation_.operation.md)

  * **MergeOperation**

### Index

#### Constructors

* [constructor](_operations_merge_operation_.mergeoperation.md#constructor)

#### Properties

* [templater](_operations_merge_operation_.mergeoperation.md#protected-templater)

#### Methods

* [run](_operations_merge_operation_.mergeoperation.md#run)
* [deepMerge](_operations_merge_operation_.mergeoperation.md#static-deepmerge)

## Constructors

###  constructor

\+ **new MergeOperation**(`templater`: *[Templater](_templater_templater_.templater.md)*): *[MergeOperation](_operations_merge_operation_.mergeoperation.md)*

*Overrides [Operation](_operations_operation_.operation.md).[constructor](_operations_operation_.operation.md#constructor)*

*Defined in [operations/merge-operation.ts:4](https://github.com/guscrawford-com/json-xform/blob/c9d079f/src/operations/merge-operation.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](_templater_templater_.templater.md) |

**Returns:** *[MergeOperation](_operations_merge_operation_.mergeoperation.md)*

## Properties

### `Protected` templater

• **templater**: *[Templater](_templater_templater_.templater.md)*

*Overrides [Operation](_operations_operation_.operation.md).[templater](_operations_operation_.operation.md#protected-templater)*

*Defined in [operations/merge-operation.ts:5](https://github.com/guscrawford-com/json-xform/blob/c9d079f/src/operations/merge-operation.ts#L5)*

## Methods

###  run

▸ **run**(`args`: *any[]*): *void*

*Overrides [Operation](_operations_operation_.operation.md).[run](_operations_operation_.operation.md#abstract-run)*

*Defined in [operations/merge-operation.ts:8](https://github.com/guscrawford-com/json-xform/blob/c9d079f/src/operations/merge-operation.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any[] |

**Returns:** *void*

___

### `Static` deepMerge

▸ **deepMerge**(`a`: *any*, `b`: *any*): *void*

*Defined in [operations/merge-operation.ts:26](https://github.com/guscrawford-com/json-xform/blob/c9d079f/src/operations/merge-operation.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |
`b` | any |

**Returns:** *void*