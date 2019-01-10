const without = (array, ...values) => {
	values.forEach(value => {
		array = array.filter(item => item !== value)
	})

	return array
}

export defalut without