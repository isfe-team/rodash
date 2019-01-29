module.exports = attempt

/**
 * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments are provided to func when it's invoked.
 *
 * @param {*} fn
 * @param  {...any} args
 * @example
 * attempt(function(a,b) {return a+b}, 1) // NaN
 * attempt(function(a,b) {return a+b}, 1, 2) // 3
 * attempt(function(a) {return a.map()}, 1)
 * // TypeError: a.map is not a function
 at <anonymous>:1:33
 at r (lodash.min.js:5)
 at Function.<anonymous> (lodash.min.js:90)
 at r (lodash.min.js:5)
 at Function.attempt (lodash.min.js:61)
 at <anonymous>:1:3
 */

function attempt (fn, ...args) {
  try { return fn.apply(null, args) } catch (e) { return e }
}
