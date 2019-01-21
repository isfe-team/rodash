module.exports = gte

/**
 * Checks if value is greater than or equal to other
 *
 * @param {any} value1
 * @param {any} value2
 * @return {boolean}
 * @example
 * gte(1, 3) // false
 * gte(3, 1) // true
 * gte(3, 3) // true
 * gte([1,2], [1, 0]) // false
 * gte({a: 1}, {a: 0}) // false
 *
 */

function gte (value1, value2) {
  if (value1 >= value2) {
    return true
  }
  return false
}
