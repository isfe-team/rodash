module.exports = toString;
const isNull = require("./isNull");
const isUndefined = require("./isUndefined");

/**
 * Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved.
 * 
 * @param {any} value
 * @return {String}
 * @example
 * toString(0) // "0"
 * toString(-0) // "0"
 * toString(null) // ""
 * toString(undefined) // ""
 * toString(NaN) // "NaN"
 * toString([1,2,3]) // "1,2,3"
 */

function toString (value) {
	if (isNull(value) || isUndefined(value)) {
		return "";
	}
	const result = "" + value;
	if (result === "0" && (1 / value) === -Infinity) {
		return "-0";
	}
	return result;
}
