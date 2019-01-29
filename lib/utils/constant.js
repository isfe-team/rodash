module.exports = constant

/**
 * Creates a function that returns value
 *
 * @param {any} value
 * @return {Function}
 * @example
 * constant(11) // function () { return 11 }
 */

function constant (value) {
  return function () {
    return value
  }
}
