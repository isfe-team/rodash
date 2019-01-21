module.exports = lte

/**
 * Checks if value is less than or equal to other
 *
 * @param {any} value1
 * @param {any} value2
 * @return {boolean}
 * @example
 * lte(1, 3) // true
 * lte(3, 1) // false
 * lte(3, 3) // true
 * lte([1,2], [1, 0]) // false
 * lte({a: 1}, {a: 0}) // false
 *
 */

function lte (value1, value2) {
  if (value1 <= value2) {
    return true
  }
  return false
}
