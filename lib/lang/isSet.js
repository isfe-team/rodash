module.exports = isSet;

/**
 * Checks if value is classified as a Set object.
 * 
 * @param {*} value
 * @return {boolean}
 * @example
 * isSet(new Set) // true
 * isSet(new WeakSet)    // false
 */

function isSet (value) {
	return Object.prototype.toString.call(value) === "[object Set]";
}
