module.exports = eq

function eq (value1, value2) {
  // 判断value1和value2是不是NaN
  if (value1 !== value1 && value2 !== value2) {
  	return true
  }
  if (value1 === value2) {
  	return true
  }
  return false
}

// eq(NaN, NaN)   // true
// eq('a', Object('a'))   // false
// eq('1', '1')   // true
// var obj1 = { a: 2 }
// var obj2 = { a: 2 }
// eq(obj1, obj1)   // true
// eq(obj1, obj2)   // false