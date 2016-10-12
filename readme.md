### Install

```
npm install --save capped_map
```

### Use

Provide a maximum size to the constructor. When the map reaches that size, adding a new entry will cause the oldest entry to be deleted.

```js
const CappedMap = require('capped_map').CappedMap
const assert = require('assert')

let map = new CappedMap(1)

map.set(1, 1)
assert.equal(map.get(1), 1)

map.set(2, 2)
assert.equal(map.size, 1)
assert.equal(map.has(1), false)
assert.equal(map.get(2), 2)
```
