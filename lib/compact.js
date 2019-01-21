const isArray = require('./lang/isArray')

module.exports = compact

/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param {Array<any>} xs
 * @return {Array}
 */
function compact (xs) {
  if (!isArray(xs)) {
    return [ ]
  }
  return xs.filter((item) => !!item)
}
