module.exports = bindAll
const difference = require('../array/difference')

/**
 * Binds methods of an object to the object itself, overwriting the existing method.
 *
 * @param {Object} obj
 * @param {Array} methods
 * @example
 * var view = { 'label': 'docs', 'click': function() { console.log('clicked ' + this.label) }
 * var bindView = _.bindAll(view, ['click']); // bindAll: {label: "docs", click: ƒ}
 * bindAll.click() = function () {console.log('click bindView')} // bindAll.click() 'click bindView', view.click() 'click bindAll'
 */

function bindAll (obj, methods = [ ]) {
  try {
    if (methods.length === 0) {
      return obj
    }
    let newObj = obj
    let objKeysArr = [ ]

    for (let key in obj) {
      objKeysArr.push(key)
    }
    if (difference(methods, objKeysArr).length !== 0) {
      throw Error('Expected a function')
    }
    return newObj
  } catch (e) {
    throw e
  }
}
