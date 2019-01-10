const fill = (array, value, start = 0, end = array.length) => {
	for(let i = start; i < end; i ++) {
		array[i] = value
	}
	return array
}

export defalut fill