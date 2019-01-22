const isArray = require('./isArray')

module.exports = castArray

/**
 * Casts value as an array if it's not one.
 *
 * @param {any} value
 * @return {Array}
 * @example
 * castArray(undefined) // [undefined]
 * castArray(null)      // [null]
 * castArray(1)         // [1]
 * castArray([1, 2])    // [1, 2]
 * castArray({a: 1})    // [{a: 1}]
 * castArray()          // [ ]
 */
function castArray (...argue) {
  if (!argue.length) {
    return []
  }
  const value = argue[0]
  if (isArray(value)) {
    return value
  }
  return [value]
}
