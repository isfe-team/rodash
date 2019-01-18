module.exports = compact;

/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * 
 * @param {Array} arr 
 * @return {Array}
 * @example
 * compact([1,,false,2,0,null])) // [1,2]
 */

function compact (arr = [ ]) {
	var newArr = [ ];
	arr.map((x) => {
		if (x) {
			newArr.push(x);
		}
	});
	return newArr;
}
