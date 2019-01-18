module.exports = isArrayBuffer;

/**
 * Checks if value is classified as an ArrayBuffer object.
 * 
 * @param {any} value
 * @return {boolean}
 * @example
 * isArrayBuffer(new ArrayBuffer()) // true
 * isArrayBuffer(new Array()) // false
 * isArrayBuffer(new Buffer()) // false 
 */

function isArrayBuffer (value) {
	return Object.prototype.toString.call(value) === "[object ArrayBuffer]";
}
