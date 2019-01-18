module.exports = isFinite;

/**
 * Checks if value is a finite primitive number. 
 * 
 * @param {*} value 
 * @return {Boolean}
 * @example
 * isFinite(Number.MIN_VALUE - 11111222222) // true
 * isFinite(Number.MAX_SAFE_INTEGER + 1) // true
 * isFinite(Infinity) // false
 * isFinite(111) // true
 */

function isFinite(value) {
	return value < Infinity && value > -Infinity;
}
