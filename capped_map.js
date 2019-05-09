module.exports = function wrap (map, maximumSize = Infinity) {
  const prototype = Reflect.getPrototypeOf(map)
  const existingSetMethodDescriptor = Reflect.getOwnPropertyDescriptor(map, 'set') || Reflect.getOwnPropertyDescriptor(prototype, 'set')

  Reflect.defineProperty(map, 'set', Object.assign(existingSetMethodDescriptor, {
    value: new Proxy(map.set, {
      apply: function (defaultSet, map, args) {
        const result = Reflect.apply(defaultSet, map, args)

        if (map.size > maximumSize) {
          map.delete(map.keys().next().value)
        }

        return result
      }
    })
  }))

  return map
}
