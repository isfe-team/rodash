const zip = (...arrays) => {
	const termLength = arrays[0].length

	const finalArray = []
	for(let i = 0; i < termLength; i ++) {
		const accu = []
		arrays.forEach(item => {
			accu.push(item[i])
		})
		
		finalArray.push(accu)
	}

	return finalArray
}

export defalut zip