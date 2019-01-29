module.exports = cloneDeep
const isArray = require('./isArray')

/**
 * This method is like clone except that it recursively clones value.
 *
 * @param {any} value
 * @return {any}
 * @example
 * var objects = [{ 'a': 1 }, { 'b': 2 }]
 * var b = cloneDeep(objects)
 * b // [{ 'a': 1 }, { 'b': 2 }]
 * objects[0] === b[0] // false
 * b[0].a = 3 // b:[{'a': 3}, {'b': 2}]   objects: [{a: 1}, {b: 2}]
 */

function cloneDeep (value) {
  var result
  if (value instanceof Date) {
    result = new Date()
    result.setTime(value.getTime())
    return result
  }
  if (value && typeof value === 'object') {
    result = isArray(value) ? [ ] : { }
    for (let key in value) {
      if (value[key] && typeof value[key] === 'object') {
        result[key] = cloneDeep(value[key])
      } else {
        result[key] = value[key]
      }
    }
    return result
  }
  return value
}
