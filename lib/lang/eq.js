const isNaN = require("./isNaN");
module.exports = eq;

/**
 * Performs a SameValueZero comparison between two values to determine if they are equivalent
 * 
 * @param {any} value1 
 * @param {any} value2 
 * @return {boolean}
 * @example
 * eq(NaN, NaN)   // true
 * eq('1', '1')   // true
 * var obj1 = { a: 2 }; var obj2 = { a: 2 }; eq(obj1, obj1)   // true
 * var obj1 = { a: 2 }; var obj2 = { a: 2 }; eq(obj1, obj2)   // false
 */

function eq (value1, value2) {
	if (isNaN(value1) && isNaN(value2)) {
		return true;
	}
	if (value1 === value2) {
		return true;
	}
	return false;
}
