> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["operations/operation"](../modules/_operations_operation_.md) / [Operation](_operations_operation_.operation.md) /

# Class: Operation

## Hierarchy

* **Operation**

  * [RemoveOperation](_operations_remove_operation_.removeoperation.md)

  * [SortOperation](_operations_sort_operation_.sortoperation.md)

  * [ExtendsOperation](_operations_extends_operation_.extendsoperation.md)

  * [MergeOperation](_operations_merge_operation_.mergeoperation.md)

### Index

#### Constructors

* [constructor](_operations_operation_.operation.md#constructor)

#### Properties

* [templater](_operations_operation_.operation.md#protected-templater)

#### Methods

* [run](_operations_operation_.operation.md#abstract-run)

## Constructors

###  constructor

\+ **new Operation**(`templater`: *[Templater](_templates_templater_.templater.md)*): *[Operation](_operations_operation_.operation.md)*

*Defined in [operations/operation.ts:3](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/operations/operation.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](_templates_templater_.templater.md) |

**Returns:** *[Operation](_operations_operation_.operation.md)*

## Properties

### `Protected` templater

• **templater**: *[Templater](_templates_templater_.templater.md)*

*Defined in [operations/operation.ts:4](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/operations/operation.ts#L4)*

## Methods

### `Abstract` run

▸ **run**(`args`: *any[]*): *any*

*Defined in [operations/operation.ts:5](https://github.com/guscrawford-com/json-xform/blob/9eac5e8/src/operations/operation.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any[] |

**Returns:** *any*