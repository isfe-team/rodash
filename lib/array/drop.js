module.exports = drop

function drop (arr, n = 1) {
	return arr.slice(n)
}

	
// console.log(drop([1,2,3]))  // [2,3]
// console.log(drop([1,2,3], 2))  // [3]
// console.log(drop([1,2,3], 5))  // []
// console.log(drop([1,2,3],0))  // [1,2,3]