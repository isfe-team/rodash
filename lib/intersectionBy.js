const intersectionBy = (...params) => {
	const iteratee = params[params.length - 1]
	const compareArray = params[0]
	const arrays = params.slice(1, params.length - 1)

	const finalArray = []
	compareArray.forEach(value => {
		const compareValue = iteratee(value)
		arrays.forEach(array => {
			// 判断该值是否存在当前数组中
			const isHave = array.some(item => compareValue === iteratee(item))

			// 如果是存在当前数组中
			if (isHave) {
				finalArray.push(value)
			}
		})
	})

	return finalArray
}

export defalut intersectionBy