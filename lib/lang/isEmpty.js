module.exports = isEmpty
const isNumber = require('./isNumber')
const isBoolean = require('./isBoolean')

/**
 * Checks if value is an empty object, collection, map, or set.
 *
 * @param {any} value
 * @return {boolean}
 * @example
 * isEmpty(111) // true
 * isEmpty(true) // true
 * isEmpty(null) // true
 * isEmpty({}) // true
 * isEmpty('111') // false
 * isEmpty([11]) // false
 * isEmpty({value: 111}) // false
 */

function isEmpty (value) {
  if (isNumber(value) || isBoolean(value) || !value || !value.length) {
    return true
  }
  return false
}
