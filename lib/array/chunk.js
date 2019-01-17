module.exports = chunk

function chunk (arr, n) {
  var outArr = [ ]
  if (n >= arr.length) {
    outArr.push(arr)
    return outArr
  }
  for (var i = 0; i < arr.length; i = i + n) {
    outArr.push(arr.slice(i, i+n))
  }
  return outArr
}

// console.log(chunk([1,2,3,4],1))  // [[1], [2], [3], [4]]
// console.log(chunk([1,2,3,4],2))  // [[1,2], [3,4]]
// console.log(chunk([1,2,3,4],3))  // [[1,2,3], [4]]
// console.log(chunk([1,2,3,4],4))  // [1,2,3,4]
