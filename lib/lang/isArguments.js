module.exports = isArguments

function isArguments (value) {
  return Object.prototype.toString.call(value) ==='[object Arguments]'
}

isArguments(function() { return arguments; }()) // true
isArguments([1, 2, 3]) // false
isArguments({name: 111}) // false
isArguments(111) // false
