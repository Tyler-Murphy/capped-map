const assert = require('assert')
const wrap = require('./capped_map')

let tests = []

// no size limit
tests.push(() => {
  let map = wrap(new Map())
  let i = 0
  let size = 1000

  while (i++ < size) {
    map.set(i, i)
  }

  assert.strictEqual(map.size, size, 'no size limit when nothing passed to constructor')
})

// size limit 0
tests.push(() => {
  let limit = 0
  let map = wrap(new Map(), limit)

  map.set(1, 1)
  assert.strictEqual(map.size, limit)
})

// size limit 1
tests.push(() => {
  let limit = 1
  let map = wrap(new Map(), limit)

  map.set(1, 1)
  assert.strictEqual(map.size, 1)
  assert.strictEqual(map.get(1), 1)

  map.set(2, 2)
  assert.strictEqual(map.size, limit)
  assert.ok(!map.has(1))
  assert.strictEqual(map.get(2), 2)
})

// large size limit
tests.push(() => {
  let limit = 1000
  let map = wrap(new Map(), limit)
  let i = 0

  while (i++ < limit) {
    map.set(i, i)
  }

  assert.strictEqual(map.size, limit)
  assert.strictEqual(map.get(1), 1)

  map.set('another', 'something else')
  assert.strictEqual(map.size, limit)
  assert.ok(!map.has(1))
})

tests.forEach(test => {
  try {
    test()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})

console.log('all tests passed')
