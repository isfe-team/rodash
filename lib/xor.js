const xor = (...arrays) => {
	const allArray = arrays.reduce((allArray, array) => allArray.concat(array))

	const finalArray = []
	allArray.forEach(item => {
		if (finalArray.indexOf(item) === -1) {
			finalArray.push(item)
		} else {
			const index = finalArray.indexOf(item)
			finalArray.splice(index, 1)
		}
	})

	return finalArray
}

export defalut xor