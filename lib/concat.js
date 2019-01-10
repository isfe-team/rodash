const concat = (array, ...values) => {
	const finalArray = [...array]
	values.forEach(value => {
		// 判断该项是数组还是字符
		if (Array.isArray(value)) {
			value.forEach(item => {
				finalArray.push(item)
			})
		} else {
			finalArray.push(value)
		}
	})

	return finalArray
}

export defalut concat