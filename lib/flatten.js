const flatten = array => {
	const finalArray = []
	array.forEach(item => {
		if(Array.isArray(item)) {
			item.forEach(value => {
				finalArray.push(value)
			})
		} else {
			finalArray.push(item)
		}
	})
	return finalArray
}

export defalut flatten