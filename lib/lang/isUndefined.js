module.exports = isUndefined

/**
 * Checks if value is null.
 *
 * @param {any} value
 * @return {object}
 * @example
 * isUndefined(undefined) // true
 * isUndefined(null) // false
 * isUndefined(111) // false
 * isUndefined(NaN) // false
 * isUndefined(void 0) // false
 */

function isUndefined (value) {
  return Object.prototype.toString.call(value) === '[object Undefined]'
}
