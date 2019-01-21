const isArrayLike = require('./isArrayLike')
module.exports = isArrayLikeObject

/**
 * This method is like _.isArrayLike except that it also checks if value is an object
 *
 * @param {any} value
 * @return {boolean}
 * @example
 * isArrayLikeObject([1, 2, 3])  //  true
 * isArrayLikeObject(document.body.children) //true
 * isArrayLikeObject('abc')// false
 * isArrayLikeObject(_.noop)// false
 */

function isArrayLikeObject (value) {
  if (isArrayLike(value) && Object.prototype.toString.call(value) === '[object Object]') {
    return true
  }
  return false
}
