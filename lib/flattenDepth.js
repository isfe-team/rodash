const flattenDepth = (array, depth = 1) => {
	const finalArray = []
	let n = 0

	function isArray(value) {
		if (n === depth) {
			finalArray.push(value)
		}else if (n < depth) {
			if(Array.isArray(value)) {
				n ++
				value.forEach(item => {
					isArray(item)
				})
			} else {
				finalArray.push(value)
			}
		}
	}

	array.forEach(item => {
		isArray(item)
	})

	return finalArray
}

export defalut flattenDepth