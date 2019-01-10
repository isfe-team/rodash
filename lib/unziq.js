const unzip = array => {
	const finalArray = []

	const termLength = array[0].length
	for(let i = 0; i < termLength; i ++) {
		const term = []
		array.forEach(item => {
			term.push(item[i])
		})

		finalArray.push(term)
	}
	
	return finalArray
}

export defalut unzip
