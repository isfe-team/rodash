const remove = (array, predicate=_.identity) => {
	const finalArray = []
	array.map((item, n) => {
		if (predicate(item, n, array)) {
			finalArray.push(item)
		} else {
			return predicate(item, n, array)
		}
	})

	return finalArray
}

export defalut remove