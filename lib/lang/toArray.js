module.exports = toArray;
const isString = require("./isString");
const isArray = require("./is");

/**
 * Converts value to an array.
 * 
 * @param {any} value 
 * @return {Array}
 * @example
 * toArray({a: 1, b: 23, c: 777}) // [1, 23, 777]
 * toString('1,23,3--`') // ["1", ",", "2", "3", ",", "3", "-", "-", "`"]
 * toString([1,2,3,4]) // [1,2,3,4]
 * toArray(new Map) // []
 * toArray(null) // []
 * toArray(undefined) // []
 * toArray(111) // []
 */

function toArray (value) {
	var newArr = [ ];
	if (Object.prototype.toString.call(value) === "[object Object]") {
		for (var key in value) {
			newArr.push(value[key]);
		}
		return newArr;
	}
	if (isString (value)) {
		for(var i = 0; i < value.length; i++) {
			newArr.push(value.slice(i, i + 1));
		}
		return newArr;
	}
	if (isArray(value)) {
		return value;
	}
	return [ ];
}
