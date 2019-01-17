module.exports = castArray

function castArray (value) {
  if (!value) {
    return [value]
  }
  if (return Object.prototype.toString.call(value) !=='[object Array]') {
    return value
  }
  return [value]
}

// console.log(castArray(undefined))    // [undefined]
// console.log(castArray(null))    // [null]
// console.log(castArray(1))    // [1]
// console.log(castArray([1,2]))    // [1,2]
// console.log(castArray({a: 1}))    // [{a: 2}]
