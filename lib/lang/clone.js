module.exports = clone

function clone (value) {
  return value
}

// var objects = [{ 'a': 1 }, { 'b': 2 }]
// var b = clone(objects)
// console.log(b, objects[0] === b[0]) // [{ 'a': 1 }, { 'b': 2 }], true
// b[0].a = 3  // b　　[{'a': 3}, {'b': 2}]   objects   [{a: 3}, {b: 2}]
