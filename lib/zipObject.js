const zipObject = (props, values) => {
	const termLength = props.length

	const finalArray = []
	for(let i = 0; i < termLength; i ++) {
		const term = {}
		term[props[i]] = values[i]

		finalArray.push(term)
	}

	return finalArray
}

export defalut zipObject