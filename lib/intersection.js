const intersection = (...arrays) => {
	const compareArray = arrays[0]
	arrays = arrays.slice(1, arrays.length - 1)
	const finalArray = [] //所有数组共享元素的新数组

	compareArray.forEach(compareValue => {
		arrays.forEach(array => {
			// 判断该值是否存在当前数组中
			const isHave = array.some(item => compareValue === item)

			// 如果是存在当前数组中
			if (isHave) {
				finalArray.push(compareValue)
			}
		})
	})

	return finalArray
}

export defalut intersection