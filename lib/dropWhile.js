const dropWhile = (array, predicate) => {
	// 获取裁剪数组的起始点
	const start = array.findIndex((value, index) => !predicate(value, index, array))
	console.log(start)

	const finalArray = array.splice(start, array.length)
	return finalArray
}

export defalut dropWhile