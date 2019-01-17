module.exports = compact

function compact (arr = [ ]) {
  var newArr = [ ]
  arr.map((x) => {
    if (x) {
      newArr.push(x)
    }
  })
  return newArr
}

// console.log(compact([1,,false,2,0,null])) // [1,2]