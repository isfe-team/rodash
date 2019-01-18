module.exports = isMatch;

/**
 * Performs a partial deep comparison between object and source to determine if object contains equivalent property values. 
 * 
 * @param {Object} value 
 * @param {Object} source 
 * @return {Boolean}
 * @example
 * var obj = {a: 1, b: 2}; isMatch(obj, {a: 1}) // true
 * isMatch(NaN, undefined) // true
 * isMatch([11,22], [11,22]) // true 
 */

function isMatch (value, source) {
	var valueKeys = [ ];
	for (var key in value) {
		valueKeys.push(key);
	}
	for(var sourceKey in source) {
		if (valueKeys.indexOf(sourceKey) === -1) {
			return false;
		}
		if (value[sourceKey] === source[sourceKey]) {
			return true;
		}
		return false;
	}
	return true;
}
