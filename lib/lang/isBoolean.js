module.exports = isBoolean

function isBoolean (value) {
  return typeof value === 'boolean'
}

// isBoolean(false) // true
// isBoolean(true) // true
// isBoolean(09) // false
// isBoolean('') // false
// isBoolean(!7) // true
// isBoolean([1]) // false
// isBoolean({}) // false
