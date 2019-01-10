const uniqBy = (array, iteratee) => {
	let finalArray = []
	let compareArray = []
	array.forEach((item, n) => {
		if (compareArray.indexOf(iteratee(item)) === -1) {
			finalArray.push(item)
			compareArray.push(iteratee(item))
		}
	})

	return finalArray
}

export defalut uniqBy