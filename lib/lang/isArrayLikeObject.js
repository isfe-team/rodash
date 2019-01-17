module.exports = isArrayLikeObject

function isArrayLikeObject(value) {
  if (value && typeof value !== 'function' && value.length > 0 && Object.prototype.toString.call(value) ==='[object Object]' ) {
    return true
  }
  return false
}

// isArrayLikeObject([1, 2, 3])  //  true
// isArrayLikeObject(document.body.children) //true
// isArrayLikeObject('abc')// false
// isArrayLikeObject(_.noop)// false
