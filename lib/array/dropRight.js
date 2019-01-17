module.exports = dropRight

function dropRight (arr, n = 1) {
  if (arr.length < n) {
    return [ ]
  }
  return arr.slice(0, arr.length - n)
}


// console.log(dropRight([1,2,3]))  // [1,2]
// console.log(dropRight([1,2,3], 2))  // [1]
// console.log(dropRight([1,2,3], 4))  // []
// console.log(dropRight([1,2,3],0))  // [1,2,3]