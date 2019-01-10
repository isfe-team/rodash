const drop = (array, n = 1) => {
	const end = array.length
	const finalArray = array.slice(n, end)
	array.splice(0, n)
	return finalArray
}

export defalut drop