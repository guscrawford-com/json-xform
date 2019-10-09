> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["operations/foreach-operation"](../modules/_operations_foreach_operation_.md) / [ForEachOperation](_operations_foreach_operation_.foreachoperation.md) /

# Class: ForEachOperation

## Hierarchy

* [Operation](_operations_operation_.operation.md)

  * **ForEachOperation**

### Index

#### Constructors

* [constructor](_operations_foreach_operation_.foreachoperation.md#constructor)

#### Properties

* [templater](_operations_foreach_operation_.foreachoperation.md#protected-templater)

#### Methods

* [run](_operations_foreach_operation_.foreachoperation.md#run)

## Constructors

###  constructor

\+ **new ForEachOperation**(`templater`: *[Templater](_templater_templater_.templater.md)*): *[ForEachOperation](_operations_foreach_operation_.foreachoperation.md)*

*Overrides [Operation](_operations_operation_.operation.md).[constructor](_operations_operation_.operation.md#constructor)*

*Defined in [operations/foreach-operation.ts:5](https://github.com/guscrawford-com/json-xform/blob/055a393/src/operations/foreach-operation.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`templater` | [Templater](_templater_templater_.templater.md) |

**Returns:** *[ForEachOperation](_operations_foreach_operation_.foreachoperation.md)*

## Properties

### `Protected` templater

• **templater**: *[Templater](_templater_templater_.templater.md)*

*Overrides [Operation](_operations_operation_.operation.md).[templater](_operations_operation_.operation.md#protected-templater)*

*Defined in [operations/foreach-operation.ts:6](https://github.com/guscrawford-com/json-xform/blob/055a393/src/operations/foreach-operation.ts#L6)*

## Methods

###  run

▸ **run**(`args`: *any[]*): *void*

*Overrides [Operation](_operations_operation_.operation.md).[run](_operations_operation_.operation.md#abstract-run)*

*Defined in [operations/foreach-operation.ts:9](https://github.com/guscrawford-com/json-xform/blob/055a393/src/operations/foreach-operation.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any[] |

**Returns:** *void*