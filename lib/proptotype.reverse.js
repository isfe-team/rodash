const reverse = array => {
	const finalArray = []
	array.forEach(item => {
		finalArray.unshift(item)
	})

	return finalArray
}

export defalut reverse