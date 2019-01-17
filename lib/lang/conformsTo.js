module.exports = conformsTo

function conformsTo (value, source) {
	var souceKey,sourceFn
	var valueKeyArr = [ ]
	for(var key in source) {
		souceKey = key
		sourceFn = source[key]
	}
	for(var valueKey in value) {
		valueKeyArr.push(valueKey)
	}
	if (!souceKey) {
		return false
	}
	if (valueKeyArr.indexOf(souceKey) === -1) {
		return false
	}
	return sourceFn(value[valueKey])
 
}

// conformsTo(object, { 'b': function(n) { return n > 1; } }) // true
// conformsTo(object, { 'b': function(n) { return n > 2; } }) // false
// conformsTo(object, { function(n) { return n > 2; } }) // false
// conformsTo(object, { 'c': function(n) { return n > 2; } }) // false
