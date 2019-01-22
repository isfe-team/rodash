module.exports = chunk

/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} arr
 * @param {Number} n
 * @return {Array}
 * @example
 * chunk([1,2,3,4],1))  // [[1], [2], [3], [4]]
 * chunk([1,2,3,4],2))  // [[1,2], [3,4]]
 * chunk([1,2,3,4],3))  // [[1,2,3], [4]]
 * chunk([1,2,3,4],4))  // [1,2,3,4]
 */

function chunk (arr = [], n = 0) {
  var outArr = [ ]
  if (n >= arr.length) {
    outArr.push(arr)
    return outArr
  }
  for (var i = 0; i < arr.length; i = i + n) {
    outArr.push(arr.slice(i, i + n))
  }
  return outArr
}
