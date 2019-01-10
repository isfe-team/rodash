const zipWith = (...params) => {
	const arrays = params.slice(0, params.length - 1)
	const iteratee = params[params.length - 1]

	const termLength = arrays[0].length

	const finalArray = []
	for(let i = 0; i < termLength; i ++) {
		const term = []
		arrays.forEach(item => {
			term.push(item[i])
		})

		const finalTerm = iteratee(...term)
		finalArray.push(finalTerm)
	}

	return finalArray
}

export defalut zipWith