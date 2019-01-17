module.exports = cloneDeep

var cloneDeep = function fnDeepClone(obj){
  var result = { }
  if (obj && typeof obj === 'object') {
    for (let key in obj ) {
      if (obj[key] && typeof obj[key] === 'object'){
          result[key] = fnDeepClone(obj[key])
        } else {
          result[key] = obj[key]
        }
      }
    return result
  }
  return obj
}

// var objects = [{ 'a': 1 }, { 'b': 2 }]
// var b = cloneDeep(objects)
// console.log(b, objects[0] === b[0]) // [{ 'a': 1 }, { 'b': 2 }], false
// b[0].a = 3  // b　　[{'a': 3}, {'b': 2}]   objects   [{a: 1}, {b: 2}]
