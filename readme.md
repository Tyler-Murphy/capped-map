[![Build Status](https://travis-ci.org/Tyler-Murphy/capped-map.svg?branch=master)](https://travis-ci.org/Tyler-Murphy/capped-map)

### Install

```
npm install --save capped_map
```

### Use

Provide a maximum size to the constructor. When the map reaches that size, adding a new entry will cause the oldest entry to be deleted.

```js
const makeCappedMap = require('capped_map')
const assert = require('assert')

let map = makeCappedMap(new Map(), 1)

map.set(1, 1)
assert.strictEqual(map.get(1), 1)

map.set(2, 2)
assert.strictEqual(map.size, 1)
assert.strictEqual(map.has(1), false)
assert.strictEqual(map.get(2), 2)
```
