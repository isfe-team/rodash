const takeRight = (array, n = 1) => {
	const start = array.length - n > 0 ? array.length - n : 0
	return array.slice(start, array.length)
}

export defalut takeRight