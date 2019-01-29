module.exports = dropRight

/**
 * Creates a slice of array with n elements dropped from the end.
 *
 * @param {Array} arr
 * @param {Number} n
 * @return {Array}
 * @example
 * dropRight([1,2,3]))  // [1, 2]
 * dropRight([1,2,3], 2))  // [1]
 * dropRight([1,2,3], 4))  // [ ]
 * dropRight([1,2,3],0))  // [1,2,3]
 */

function dropRight (arr, n = 1) {
  if (arr.length < n) {
    return [ ]
  }
  return arr.slice(0, arr.length - n)
}
