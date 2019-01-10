const findIndex = (array, predicate) => {
	for(let i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			return i
		}
	}
}

export defalut findIndex