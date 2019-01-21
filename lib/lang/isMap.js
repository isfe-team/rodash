module.exports = isMap

/**
 * Checks if value is classified as a Map object.
 *
 * @param {*} value
 * @return {boolean}
 * @example
 * isMap(new Map) // true
 * isMap(new WeakMap)    // false
 */

function isMap (value) {
  return Object.prototype.toString.call(value) === '[object Map]'
}
