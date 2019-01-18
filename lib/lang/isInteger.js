const isNumber = require("./isNumber");
module.exports = isInteger;

/**
 * Checks if value is an integer. 
 * 
 * @param {*} value 
 * @return {boolean}
 * @example
 * isInteger(3) // true
 * isInteger(Number.MIN_VALUE) // false
 * isInteger(Infinity) // false
 * isInteger('1') // false
 * isInteger(2.9) // false
 */

function isInteger (value) {
	return isNumber(value) && value % 1 === 0;
}
