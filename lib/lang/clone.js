module.exports = clone
const isArray = require('./isArray')

/**
 * Creates a shallow clone of value.
 *
 * @param {any} value
 * @return {any}
 * @example
 * var objects = [{ 'a': 1 }, { 'b': 2 }]; var obj2 = clone(objects)
 * objects[0] === obj2[0] // true
 * obj2[0].a = 3  // obj2 [{'a': 3}, {'b': 2}]   objects   [{a: 3}, {b: 2}]
 */

function clone (value) {
  var newValue
  if (value instanceof Date) {
    newValue = new Date()
    newValue.setTime(value.getTime())
    return newValue
  }
  if (value && typeof value === 'object') {
    newValue = isArray(value) ? [ ] : { }
    for (var i in value) {
      newValue[i] = value[i]
    }
    return newValue
  }
  newValue = value
  return newValue
}
