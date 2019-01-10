const sortedIndex = (array, value) => {
	// 二进制的方式检索是啥意思？
	let index
	for(let i = 0; i < array.length; i ++) {
		if (array[i] < value && value <= array[i + 1]) {
			array[i + 1] = value
			index = i + 1
		} else if (array[i] === value) {
			array[i] = value
			index = i
		}
	}

	return index
}

export defalut sortedIndex