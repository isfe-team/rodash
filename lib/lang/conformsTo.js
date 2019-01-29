module.exports = conformsTo

/**
 * Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object.
 *
 * @param {object} value
 * @param {object} source
 * @return {boolean}
 * @example
 * conformsTo(object, { 'b': function(n) { return n > 1; } }) // true
 * conformsTo(object, { 'b': function(n) { return n > 2; } }) // false
 * conformsTo(object, { function(n) { return n > 2; } }) // false
 * conformsTo(object, { 'c': function(n) { return n > 2; } }) // false
 */

function conformsTo (value, source) {
  if (!source) {
    return true
  }
  var souceKey, sourceFn
  var valueKeyArr = [ ]
  for (var key in source) {
    souceKey = key
    sourceFn = source[key]
  }
  for (var valueKey in value) {
    valueKeyArr.push(valueKey)
  }
  if (!souceKey) {
    return false
  }
  if (valueKeyArr.indexOf(souceKey) === -1) {
    return false
  }
  return sourceFn(value[souceKey])
}
