module.exports = isArray

/**
 * Checks if value is classified as an Array object.
 *
 * @param {any} value
 * @return {boolean}
 * @example
 * isArray([]) // true
 * isArray({}) // false
 * isArray(11) // false
 * isArray([1,2]) // true
 * isArray(document.body.children) // false
 */

function isArray (value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}
