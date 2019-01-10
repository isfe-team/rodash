const chunk = (array, size) => {
	const finalArray = []
	for(let i = 0; i < array.length; i = i + size) {
		let chunkArray = []
		let end = i + size
		if (end > array.length - 1) {
			end = array.length
		}
		chunkArray = array.slice(i, i + size)
		finalArray.push(chunkArray)
	}

	return finalArray
}

export defalut chunk