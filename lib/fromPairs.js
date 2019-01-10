const fromPairs = pairs => {
	const object = new Object()
	pairs.forEach(item => {
		const key = item[0]
		const value = item[1]

		object[key] = value
	})

	return object
}

export defalut fromPairs