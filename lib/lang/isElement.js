module.exports = isElement

function isElement (e) {
 return e && e.nodeType === 1
}