module.exports = isSymbol

/**
 * Checks if value is classified as a Symbol primitive or object.
 *
 * @param {*} value
 * @return {boolean}
 * @example
 * isSymbol(Symbol.iterator) // true
 * isSymbol('111')    // false
 * isSymbol(Symbol) // false
 */

function isSymbol (value) {
  return Object.prototype.toString.call(value) === '[object Symbol]'
}
