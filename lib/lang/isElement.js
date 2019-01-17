module.exports = isElement

function isElement (e) {
 return e && e.nodeType === 1
}

// isElement(document.body) //true
// isElement('<div></div>') //false
// isElement(1) //false
// isElement(document.createElement('div')) //true
