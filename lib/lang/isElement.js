module.exports = isElement;

/**
 * Checks if value is likely a DOM element.
 *  
 * @param {any} e
 * @return {boolean}
 * @example
 * isElement(document.body) //true
 * isElement('<div></div>') //false
 * isElement(1) //false
 * isElement(document.createElement('div')) //true
 */

function isElement (e) {
	return e && e.nodeType === 1;
}
