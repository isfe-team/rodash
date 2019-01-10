const dropRightWhile = (array, predicate) => {
	// 获取裁剪数组的起始点
	const start = array.findIndex((value, index) => !predicate(value, index, array))

	const finalArray = array.slice(0, start + 1)
	array.splice(start, array.length)
	return finalArray
}

export defalut dropRightWhile