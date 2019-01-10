const union = (...arrays) => {
	// 连接所有数组
	const allArray = arrays.reduce((allArray, array) => allArray.concat(array))

	let finalArray = []
	// 数组去重
	allArray.forEach(item => {
		if (finalArray.indexOf(item) === -1) {
			finalArray.push(item)
		}
	})

	return finalArray
}

export defalut union