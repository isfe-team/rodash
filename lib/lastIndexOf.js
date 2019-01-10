const lastIndexOf = (array, value, fromIndex = array.length - 1) => {
	for(let i = fromIndex; i > 0; i --) {
		if (value === array[i]) {
			return i
		}
	}

	return -1
}

export defalut lastIndexOf