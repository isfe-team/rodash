const takeRightWhile = (array, predicate = _.identity) => {
	const finalArray = []
	for(let i = array.length - 1; i >= 0; i--) {
		const flag = predicate(array[i], i, array)
		if (!flag) {
			return finalArray
		} else {
			finalArray.push(array[i])
		}
	}
}

export defalut takeRightWhile