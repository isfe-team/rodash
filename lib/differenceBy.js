const differenceBy = (array, values, iteratee) => {
	const array1 = array.map(item => iteratee(item))
	const array2 = values.map(item => iteratee(item))

	const finalArray = []
	array1.forEach((item, index) => {
		// 如果该值不在第二个数组中，则返回该值的index
		const isHave = array2.some(value => item === value)

		if (!isHave) {
			finalArray.push(array[index])
		}
	})

	return finalArray
}

export defalut differenceBy