module.exports = isObject

/**
 * Checks if value is classified as an Array object.
 *
 * @param {any} value
 * @return {boolean}
 * @example
 * var validArr = [null, function() { }, [], {}, new RegExp, new String, new Number, Symbol]
 * console.log(validArr.every((x) => isObject(x)))   // true
 * var notValidArr = [undefined, '111', 1111, NaN]
 * console.log(notValidArr.every((x) => !isObject(x)))  // true
 */

function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]' || typeof value === 'object' || typeof value === 'function'
}
