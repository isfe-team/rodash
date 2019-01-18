module.exports = drop;

/**
 * Creates a slice of array with n elements dropped from the beginning.
 * 
 * @param {Array} arr 
 * @param {Number} n
 * @return {Array}
 * @example
 * drop([1,2,3]))  // [2,3]
 * drop([1,2,3], 2))  // [3]
 * drop([1,2,3], 5))  // []
 * drop([1,2,3],0))  // [1,2,3]
 */

function drop (arr, n = 1) {
	return arr.slice(n);
}
