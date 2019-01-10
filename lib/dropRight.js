const dropRight = (array, n = 1) => {
	const end = n > array.length ? 0 : array.length - n
	const finalArray = array.slice(0, end)
	array.splice(array.length - n, array.length)
	return finalArray
}

export defalut dropRight