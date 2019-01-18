module.exports = isNaN;

/**
 * Checks if value is NaN.
 * 
 * @param {any} value
 * @return {boolean}
 * @example
 * isNaN(NaN) // true
 * isNaN('1') // false
 * isNaN([])  // false
 * isNaN({})  // false
 * isNaN(undefined) //false
 */

function isNaN (value) {
	return value !== value;
}
