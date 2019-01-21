module.exports = isDate

/**
 * Checks if value is classified as a Date object.
 *
 * @param {any} value
 * @return {boolean}
 * @example
 * isDate(new Date) // true
 * isDate('Mon April 23 2012') // false
 * isDate([]) // false
 * isDate({}) // false
 * isDate(11) // false
 * isDate([1,2]) // false
 * isDate(document.body.children) // false
 */

function isDate (value) {
  return Object.prototype.toString.call(value) === '[object Date]'
}
