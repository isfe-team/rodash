module.exports = difference

function difference(arr, ...values) {
  var newArr = [ ]
  values.map((x) => {
    if (newArr.length !== 0) {
      arr = newArr
      newArr = [ ]
    }
    arr.map((t) => {
      if (x.indexOf(t) === -1) {
        newArr.push(t)
      }
    })
  })
  return newArr
}

// console.log(difference([2, 1, 9], [2, 3])) // [1,9]
// console.log(difference([2, 1, 9], [2, 3], [1, 7])) // [9]
// console.log(difference([2, 1, 9], [2, 3], [2, 9] ,[4, 1])) // []
