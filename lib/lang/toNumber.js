module.exports = toNumber;
const isNumber = require("./isNumber");

/**
 * Converts value to a number.
 * 
 * @param {*} value 
 * @return {Number}
 * @example
 * toNumber(Number.MIN_VALUE) // 5e-324
 * toNumber(Infinity) // Infinity
 * toNumber('3.2') // 3.2
 * toNumber(Number.MAX_SAFE_INTEGER) // 9007199254740991
 * toNumber([1]) // 1
 * toNumber(undefined) // NaN
 * toNumber(3.2) // 3.2
  */

function toNumber (value) {
	if (isNumber(value)) {
		return value;
	}
	return value / 1;
}
