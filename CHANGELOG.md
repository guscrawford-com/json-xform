# 🔀 json-xform

**@guscrawford.com/json-xform** *JSON Transform*

Manipulate JSON files statically

----

## 0.0.1-alpha
### Jun 23 2019
#### Initial release

🎉🎈🎊

Released initial draft of *json-xform*

----

## 0.0.2-alpha
### Jun 23 2019
#### Adds remove

Adds `@xform:remove` operation

----

## 0.1.0-beta
### Jun 26 2019
#### Adds sort

Adds `@xform:sort` operation


----

## 0.1.1-beta ⚠
### Jun 29 2019
#### Adds 'filters' and inference of natural JSON types

Adds support for customizable filters:
 - `if`,`eq`,`lt`, etc.
 - Returns inferred JSON conversion; i.e. expressions evaluating to 'true' are not stringified


----

## 1.0.0-beta
### Jun 29 2019
#### Adds optional inference of natural JSON types; deprecates 0.1.1-beta

Adds support for optional non-inference of expression results; `@{ref}`

----

## 1.1.0-beta
### Jul 2 2019
#### Fix bugs, add experimental loops

- Fix bugs deep merging
- Fix multiple expressions in one key or value
- Add experimental loops

----

## 1.2.0
### Aug 19 2019
#### Fix call-stack overflow templating JSON with null values

Fix bug where max call-stack when parsing JSON with null values in it

Also adds experimental "extends" support

----

## 1.4.0
### Sep 9 2019
#### @extends

Tests and readies `@xform:extends` directive

----

## 1.5.2
### Oct 9 2019
#### @extends

Smarter variable contexts:
 - Variables can reference other variables during initialization
 - Added a `deref` filter for template-time reference to variables by other variables
 - No longer outputs evaulates `undefined` variables as `'undefined'` and returns the original expression (in case it's designed to reflect an environment variable)

`@xform:foreach` was fixed so that the atomic result of an iteration can be an object