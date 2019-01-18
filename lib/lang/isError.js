module.exports = isError;

/**
 * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object
 * 
 * @param {*} value
 * @return {boolean}
 * @example
 * isError(new Error) // true
 * isError(Error)    // false
 */

function isError (value) {
	return Object.prototype.toString.call(value) === "[object Error]";
}
