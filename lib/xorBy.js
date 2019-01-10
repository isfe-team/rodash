const xorBy = (...params) => {
	const arrays = params.slice(0, params.length - 1)
	const iteratee = params[params.length - 1]

	const allArray = arrays.reduce((allArray, array) => allArray.concat(array))

	const finalArray = []
	const compareArray = []
	allArray.forEach(item => {
		const value = iteratee(item)
		if (compareArray.indexOf(value) === -1) {
			finalArray.push(item)
			compareArray.push(value)
		} else {
			const index = compareArray.indexOf(value)
			finalArray.splice(index, 1)
			compareArray.splice(index, 1)
		}
	})

	return finalArray
}

export defalut xorBy