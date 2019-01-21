module.exports = clone

/**
 * Creates a shallow clone of value.
 *
 * @param {any} value
 * @return {any}
 * @example
 * var objects = [{ 'a': 1 }, { 'b': 2 }]; var obj2 = clone(objects)
 * objects[0] === obj2[0] // true
 * obj2[0].a = 3  // obj2 [{'a': 3}, {'b': 2}]   objects   [{a: 3}, {b: 2}]
 */

function clone (value) {
  var newObj = { }
  for (var i in value) {
    newObj[i] = value[i]
  }
  return newObj
}
