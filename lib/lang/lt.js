module.exports = lt

/**
 * Checks if value is less than other.
 *
 * @param {any} value1
 * @param {any} value2
 * @return {boolean}
 * @example
 * lt(1, 3) // true
 * lt(3, 1) // false
 * lt(3, 3) // false
 * lt([1,2], [1, 0]) // false
 * lt({a: 1}, {a: 0}) // false
 *
 */

function lt (value1, value2) {
  if (value1 < value2) {
    return true
  }
  return false
}
