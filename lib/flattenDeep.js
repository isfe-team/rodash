const flattenDeep = array => {
	const finalArray = []
	function isArray(value) {
		if(Array.isArray(value)) {
			value.forEach(item => {
				isArray(item)
			})
		} else {
			finalArray.push(value)
		}
	}

	array.forEach(item => {
		isArray(item)
	})
	
	return finalArray
}

export defalut flattenDeep