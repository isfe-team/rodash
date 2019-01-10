const pullAt = (array, ...indexes) => {
	const finalArray = []
	indexes.forEach(index => {
		finalArray.push()(array.splice(index, 1))
	})

	return finalArray
}

export defalut pullAt