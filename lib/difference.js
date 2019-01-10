const difference = (array, values) => {
	return array.filter(item => {
		// 如果该值不在第二个数组中，则返回该值
		const isHave = values.some(value => item === value)

		if (!isHave) return item
	})
}

export defalut difference