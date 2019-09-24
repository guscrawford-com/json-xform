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

\+ **new Operation**(`templater`: *[Templater](_templater_templater_.templater.md)*): *[Operation](_operations_operation_.operation.md)*

*Defined in [operations/operation.ts:3](https://github.com/guscrawford-com/json-xform/blob/b3a7638/src/operations/operation.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](_templater_templater_.templater.md) |

**Returns:** *[Operation](_operations_operation_.operation.md)*

## Properties

### `Protected` templater

• **templater**: *[Templater](_templater_templater_.templater.md)*

*Defined in [operations/operation.ts:4](https://github.com/guscrawford-com/json-xform/blob/b3a7638/src/operations/operation.ts#L4)*

## Methods

### `Abstract` run

▸ **run**(`args`: *any[]*): *any*

*Defined in [operations/operation.ts:12](https://github.com/guscrawford-com/json-xform/blob/b3a7638/src/operations/operation.ts#L12)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | any[] | **`Operation` Injectables** - `[0]` : usually the target object / reference to manipulate - `[1]` : the first "argument" in this form: `{"<at>xform:<operation>":<argument>}` - `[n > 1]` : see specific `Operation` implementation / docs  |

**Returns:** *any*