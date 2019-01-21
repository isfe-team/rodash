const isArray = require('./isArray')

module.exports = castArray

/**
 * Casts value as an array if it's not one.
 *
 * @param {any} value
 * @return {Array}
 * @example
 * castArray(undefined) // [undefined]
 * caseArray(null)      // [null]
 * caseArray(1)         // [1]
 * caseArray([1, 2])    // [1, 2]
 * caseArray({a: 1})    // [{a: 1}]
 */
function castArray (value) {
  if (isArray(value)) {
    return value
  }
  return [value]
}
