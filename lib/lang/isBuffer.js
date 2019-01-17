module.exports = isBuffer

function isBuffer (value) {
	return Object.prototype.toString.call(value) === '[object Buffer]'
}

isBuffer(new Buffer(1)) // true
isBuffer(new new Uint8Array2()) // false
