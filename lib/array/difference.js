module.exports = difference;

/**
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array. 
 * 
 * @param {Array} arr 
 * @param  {array} values 
 * @return {Array}
 * @example
 * difference([2, 1, 9], [2, 3])) // [1,9]
 * difference([2, 1, 9], [2, 3], [1, 7])) // [9]
 * difference([2, 1, 9], [2, 3], [2, 9] ,[4, 1])) // []
 */

function difference(arr, ...values) {
	var newArr = [ ];
	values.map((x) => {
		if (newArr.length !== 0) {
			arr = newArr;
			newArr = [ ];
		}
		arr.map((t) => {
			if (x.indexOf(t) === -1) {
				newArr.push(t);
			}
		});
	});
	return newArr;
}
