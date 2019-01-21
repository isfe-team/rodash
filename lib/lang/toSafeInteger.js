module.exports = toSafeInteger;
const toInteger = require("./toInteger");

/**
 * Converts value to a safe integer. A safe integer can be compared and represented correctly.
 * 
 * @param {any} value 
 * @return {Number}
 * @example
 * toSafeInteger(3.2) // 3
 * toSafeInteger(Number.MIN_VALUE) // 0
 * toSafeInteger(Infinity) // 9007199254740991
 * toSafeInteger(-Infinity)  // 0
 * toSafeInteger('3.1') // 3
 * toSafeInteger([222]) // 222
 * toSafeInteger(undefined) // 0
 */

function toSafeInteger (value) {
	value = toInteger(value); 
	if (value === Number.MIN_VALUE) {
		return 0;
	}
	if (value >= Number.MAX_SAFE_INTEGER) {
		return Number.MAX_SAFE_INTEGER;
	}
	if (value <= Number.MIN_SAFE_INTEGER) {
		return Number.MIN_SAFE_INTEGER;
	}
	return value;
}
