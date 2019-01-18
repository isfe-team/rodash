module.exports = isLength;
const isInteger = require("./isInteger");

/**
 * Checks if value is a valid array-like length. 
 * 
 * @param {*} value 
 * @return {boolean}
 * @example
 * isLength(3) // true
 * isLength(Number.MIN_VALUE) // false
 * isLength({}) // false
 * isLength(null) // false
 * isLength(NaN) // false
 * isLength(undefined) // false
 * isLength(Infinity) // false
 * isLength('3') // false
 * 
 */

function isLength (value) {
	return isInteger(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER;
}
