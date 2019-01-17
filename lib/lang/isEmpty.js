module.exports = isEmpty

function isEmpty (value) {
  if (typeof value === 'number' || typeof value === 'boolean' || !value || !value.length) {
    return true
  }
  return false
}

// isEmpty(111) // true
// isEmpty(true) // true
// isEmpty(null) // true
// isEmpty({}) // true
// isEmpty('111') // false
// isEmpty([11]) // false
// isEmpty({value: 111}) // false
