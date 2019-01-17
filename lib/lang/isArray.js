module.exports = isArray

function isArray (value) {
 return Object.prototype.toString.call(value) ==='[object Array]'
}

// isArray([])
// true
// isArray({})
// false
// isArray(11)
// false
// isArray([1,2])
// true
// isArray(document.body.children)
// false
