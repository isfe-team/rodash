module.exports = isNull

/**
 * Checks if value is null.
 *
 * @param {any} value
 * @return {object}
 * @example
 * isNull(null) // true
 * isNull(111) // false
 * isNull(undefined) // false
 * isNull(NaN) // false
 * isNull(void 0) // false
 */

function isNull (value) {
  return Object.prototype.toString.call(value) === '[object Null]'
}
