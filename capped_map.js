class CappedMap extends Map {
  constructor (maximumSize) {
    super()
    this.maximumSize = maximumSize
  }

  set (key, value) {
    let result = super.set(key, value)

    if (this.size > this.maximumSize) {
      this.delete(this.keys().next().value)
    }

    return result
  }
}

module.exports = {
  CappedMap
}
