module.exports = isBoolean

/**
 * Checks if value is classified as a boolean primitive or object.
 *
 * @param {any} value
 * @return {boolean}
 * @example
 * isBoolean(false) // true
 * isBoolean(true) // true
 * isBoolean(09) // false
 * isBoolean('') // false
 * isBoolean(!7) // true
 * isBoolean([1]) // false
 * isBoolean({}) // false
 */

function isBoolean (value) {
  return typeof value === 'boolean'
}
