module.exports = isFunction

/**
 * Checks if value is classified as a Function object.
 *
 * @param {any} value
 * @return {boolean}
 * @example
 * isFunction(_) // true
 * isFunction(/abc/) // false
 * isFunction(function fn() { }) // true
 */

function isFunction (value) {
  return Object.prototype.toString.call(value) === '[object Function]'
}
