const unzipWith = (array, iteratee) => {
	// 得到解包之后的数组
	const unzipArray = []

	const termLength = array[0].length
	for(let i = 0; i < termLength; i ++) {
		const term = []
		array.forEach(item => {
			term.push(item[i])
		})

		unzipArray.push(term)
	}

	const finalArray = []
	unzipArray.forEach(array => {
		array.forEach((item, n) => {
			const term = iteratee(accumulator = array[0], item, n, array)
			finalArray.push(term)
		})
	})

	return finalArray
}

export defalut unzipWith