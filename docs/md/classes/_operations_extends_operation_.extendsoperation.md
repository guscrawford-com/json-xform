> **[@guscrawford.com/json-xform](../README.md)**

[Globals](../globals.md) / ["operations/extends-operation"](../modules/_operations_extends_operation_.md) / [ExtendsOperation](_operations_extends_operation_.extendsoperation.md) /

# Class: ExtendsOperation

## Hierarchy

* [Operation](_operations_operation_.operation.md)

  * **ExtendsOperation**

### Index

#### Constructors

* [constructor](_operations_extends_operation_.extendsoperation.md#constructor)

#### Properties

* [importMode](_operations_extends_operation_.extendsoperation.md#protected-importmode)
* [templater](_operations_extends_operation_.extendsoperation.md#protected-templater)

#### Methods

* [run](_operations_extends_operation_.extendsoperation.md#run)
* [extend](_operations_extends_operation_.extendsoperation.md#static-extend)

## Constructors

###  constructor

\+ **new ExtendsOperation**(`templater`: *[Templater](_templater_templater_.templater.md)*, `importMode`: *boolean*): *[ExtendsOperation](_operations_extends_operation_.extendsoperation.md)*

*Overrides [Operation](_operations_operation_.operation.md).[constructor](_operations_operation_.operation.md#constructor)*

*Defined in [operations/extends-operation.ts:7](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/operations/extends-operation.ts#L7)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`templater` | [Templater](_templater_templater_.templater.md) | - |
`importMode` | boolean | false |

**Returns:** *[ExtendsOperation](_operations_extends_operation_.extendsoperation.md)*

## Properties

### `Protected` importMode

• **importMode**: *boolean*

*Defined in [operations/extends-operation.ts:8](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/operations/extends-operation.ts#L8)*

___

### `Protected` templater

• **templater**: *[Templater](_templater_templater_.templater.md)*

*Overrides [Operation](_operations_operation_.operation.md).[templater](_operations_operation_.operation.md#protected-templater)*

*Defined in [operations/extends-operation.ts:8](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/operations/extends-operation.ts#L8)*

## Methods

###  run

▸ **run**(`args`: *any[]*): *void*

*Overrides [Operation](_operations_operation_.operation.md).[run](_operations_operation_.operation.md#abstract-run)*

*Defined in [operations/extends-operation.ts:11](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/operations/extends-operation.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any[] |

**Returns:** *void*

___

### `Static` extend

▸ **extend**(`target`: *any*, `pathRef`: *string*, `templater`: *[Templater](_templater_templater_.templater.md)*, `importMode`: *boolean*): *void*

*Defined in [operations/extends-operation.ts:33](https://github.com/guscrawford-com/json-xform/blob/5ed8c18/src/operations/extends-operation.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | any |
`pathRef` | string |
`templater` | [Templater](_templater_templater_.templater.md) |
`importMode` | boolean |

**Returns:** *void*