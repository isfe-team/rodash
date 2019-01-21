module.exports = cloneDeep;

/**
 * This method is like clone except that it recursively clones value.
 *
 * @param {any} value
 * @return {any}
 * @example
 * var objects = [{ 'a': 1 }, { 'b': 2 }]
 * var b = cloneDeep(objects)
 * b // [{ 'a': 1 }, { 'b': 2 }]
 * objects[0] === b[0] // false
 * b[0].a = 3 // b:[{'a': 3}, {'b': 2}]   objects: [{a: 1}, {b: 2}]
 */

var cloneDeep = function fnDeepClone (obj) {
	var result = { };
	if (obj && typeof obj === "object") {
		for (let key in obj ) {
			if (obj[key] && typeof obj[key] === "object"){
				result[key] = fnDeepClone(obj[key]);
			} else {
				result[key] = obj[key];
			}
		}
		return result;
	}
	return obj;
};
