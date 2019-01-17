module.exports = isArrayLike

function isArrayLike(value) {
  if (value && typeof value !== 'function' && value.length > 0 ) {
    return true
  }
  return false
}

// isArrayLike([1, 2, 3])  //  true
// isArrayLike(document.body.children) //true
// isArrayLike('abc')// true
// isArrayLike(_.noop)// false