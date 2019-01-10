const unionBy = (...params) => {
	const arrays = params.slice(0, params.length - 1)
	const iteratee = params[params.length - 1]

	const allArray = arrays.reduce((allArray, array) => allArray.concat(array))

	let finalArray = []
	let compareArray = []
	allArray.forEach((item, n) => {
		if (compareArray.indexOf(iteratee(item)) === -1) {
			finalArray.push(item)
			compareArray.push(iteratee(item))
		}
	})

	return finalArray
}

export defalut unionBy