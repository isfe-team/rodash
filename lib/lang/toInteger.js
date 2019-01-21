module.exports = toInteger;
const isInteger = require("./isInteger");

/**
 * Converts value to an integer. 
 * 
 * @param {*} value 
 * @return {Number}
 * @example
 * toInteger(Number.MAX_SAFE_INTEGER) // 9007199254740991
 * let notValidValue = [undefined, null, NaN, [1,2], {a: 1}]
 * notValidValue.every((x) => {(toInteger(x) === 0)}) // true
 * toInteger(-Infinity) // -1.7976931348623157e+308
 * toInteger('3.2') // 3 
 */

function toInteger (value) {
	if (isInteger(value)) {
		return value;
	}
	const calcValue = Math.floor(value);
	if (calcValue === Infinity) {
		return 1.7976931348623157e+308;
	}
	if (calcValue === -Infinity) {
		return -1.7976931348623157e+308;
	}
	if (!isInteger(calcValue)) {
		return 0;
	}
	return calcValue;
}
