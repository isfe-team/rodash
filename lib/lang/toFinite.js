module.exports = toFinite;
const isFinite = require("./isFinite");

/**
 * Converts value to a finite number.
 * 
 * @param {*} value 
 * @return {Number}
 * @example
 * toFinite(3.2) // 3.2
 * toFinite(Number.MIN_VALUE) // 5e-324
 * toFinite(Infinity) // 1.7976931348623157e+308
 * toFinite('3.2') // 3.2
 * toFinite(null) // 0
 * toFinite([111]) // 111
 */

function toFinite (value) {
	if (isFinite(value)) {
		return value;
	}
	if (value === Infinity) {
		return 1.7976931348623157e+308;
	}
	if (value === -Infinity) {
		return -1.7976931348623157e+308;
	}
	if (value > -Infinity && value < Infinity) {
		return Number(value);
	}
	return 0;
}
