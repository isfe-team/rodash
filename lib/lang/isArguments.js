module.exports = isArguments;

/**
 * Checks if value is likely an arguments object.
 * 
 * @param {any} value
 * @return {boolean}
 * @example
 * isArguments(function() { return arguments; }()) // true
 * isArguments([1, 2, 3]) // false
 * isArguments({name: 111}) // false
 * isArguments(111) // false
 */

function isArguments (value) {
	return Object.prototype.toString.call(value) ==="[object Arguments]";
}
