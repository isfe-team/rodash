const uniq = array => {
	const finalArray = []
	array.forEach(item => {
		if (finalArray.indexOf(item) === -1) {
			finalArray.push(item)
		}
	})

	return finalArray
}

export defalut uniq