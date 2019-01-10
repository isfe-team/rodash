const join = (array, separator = ',') => {
	return array.reduce((total, item) => {
		return total + separator + item 
	})
}

export defalut join