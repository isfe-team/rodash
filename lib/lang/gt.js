module.exports = gt

function gt (value1, value2) {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
  	return false
  }
  if (value1 > value2) {
  	return true
  }
  return false
}

// gt(1,2)  //false
// gt(2,2)  //false
// gt(3,2)  //true
// gt({a: 2}, {a: 1}) //false
