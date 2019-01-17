module.exports = isArrayBuffer

function isArrayBuffer (value) {
	return Object.prototype.toString.call(value) === '[object ArrayBuffer]'
}

// isArrayBuffer(new ArrayBuffer()) // true
// isArrayBuffer(new Array()) // false
// isArrayBuffer(new Buffer()) // false
