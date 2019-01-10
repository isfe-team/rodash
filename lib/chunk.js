module.exports = chunk

/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array<any>} xs
 * @param {number} [size=1]
 * @return {Array}
 */
function chunk (xs, size) {
  if (Object.prototype.toString.call(xs) !== '[object Array]') {
    return [ ]
  }
  // `NaN` or `0` reset to 1
  size = parseInt(size, 10) || 1
  const result = [ ]
  for (let i = 0; i < xs.length; i = i + size) {
    // no need to judge the end index
    result.push(xs.slice(i, i + size))
  }

  return result
}
