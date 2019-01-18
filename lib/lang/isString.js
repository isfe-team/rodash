module.exports = isString;

/**
 * Checks if value is classified as a String primitive or object.
 * 
 * @param {any} value
 * @return {boolean}
 * @example
 * isString('111') // true
 * var validArr = [111, null, undefined, {}, [], _.noop]
 * validArr.every((x) => !isObject(x)))  // true
 */

function isString (value) {
	return Object.prototype.toString.call(value) === "[object String]";
}
