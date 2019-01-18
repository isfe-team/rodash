const isFunction = require("./isFunction");
module.exports = isArrayLike;

/**
 * Checks if value is array-like. A value is considered array-like if it's not a function and has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.
 *
 * @param {any} value
 * @return {boolean}
 * @example
 * isArrayLike([1, 2, 3])  //  true
 * isArrayLike([])  //  true
 * isArrayLike(document.body.children) //true
 * isArrayLike('abc')// true
 * isArrayLike(_.noop)// false
 */

function isArrayLike(value) {
	if (value && isFunction(value) && value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER ) {
		return true;
	}
	return false;
}
