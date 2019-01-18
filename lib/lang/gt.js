module.exports = gt;

/**
 * Checks if value is greater than other
 * 
 * @param {any} value1 
 * @param {any} value2
 * @return {boolean}
 * @example
 * gt(1, 3) // false
 * gt(3, 1) // true
 * gt(3, 3) // false
 * gt([1,2], [1, 0]) // false
 * gt({a: 1}, {a: 0}) // false
 * 
 */

function gt (value1, value2) {
	if (value1 > value2) {
		return true;
	}
	return false;
}
