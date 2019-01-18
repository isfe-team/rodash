module.exports = isNumber;

/**
 * Checks if value is classified as a Number primitive or object.
 * 
 * @param {any} value
 * @return {boolean}
 * @example
 * isNumber(11) // true
 * isNumber('11') // false
 * isNumber(null) // false
 * isNumber(undefined) // false
 * isNumber() // false
 * isNumber({}) // false
 * isNumber([]) // false
 */

function isNumber (value) {
	return Object.prototype.toString.call(value) ==="[object Number]";
}
