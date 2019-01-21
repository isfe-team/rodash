module.exports = isEqual

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {any} value1
 * @param {any} value2
 * @return {boolean}
 * @example
 * var object = { 'a': 1 }; var other = { 'a': 1 }; isEqual(object, other) // true
 * isEqual(NaN, NaN) // true
 * isEqual(null, null) // true
 * isEqual(undefined, undefined) // true
 * isEqual([111], [111]) // true
 * isEqual([111], 111) // false
 */

function isEqual (value1, value2) {
  var value1Type = Object.prototype.toString.call(value1)
  var value2ype = Object.prototype.toString.call(value2)
  if (value1Type !== value2ype) {
    return false
  }
  return JSON.stringify(value1) === JSON.stringify(value2)
}
