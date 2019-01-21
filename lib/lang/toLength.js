module.exports = toLength
const toInteger = require('./toInteger')

/**
 * Converts value to an integer suitable for use as the length of an array-like object.
 *
 * @param {*} value
 * @return {Number}
 * @example
 * toLength(3.2) // 3
 * toLength(Number.MAX_SAFE_INTEGER) // 4294967295
 * toLength(Number.MIN_VALUE) // 0
 * toLength(Infinity) // 4294967295
 * toLength('3.2') // 3
 * toLength([1111]) // 1111
 */

const MAX_ARRAY_LENGTH = 4294967295
function toLength (value) {
  if (!value) {
    return 0
  }
  value = toInteger(value)
  if (value < 0) {
    return 0
  }
  if (value > MAX_ARRAY_LENGTH) {
    return MAX_ARRAY_LENGTH
  }
  return value
}
