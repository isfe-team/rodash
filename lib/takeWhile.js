const takeWhile = (array, predicate = _.identity) => {
	const finalArray = []
	for(let i = 0; i < array.length; i ++) {
		const flag = predicate(array[i], i, array)
		if (!flag) {
			return finalArray
		} else {
			finalArray.push(array[i])
		}
	}
}

export defalut takeWhile