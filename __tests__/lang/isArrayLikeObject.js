/* global describe, it, expect */

const isArrayLikeObject = require('../../lib/lang/isArrayLikeObject')

const testArr = [ [1, 2], [{ a: 1 }, { b: 2 }], document.body.children ]
const notObjectArr = [function () { }, '1111', 111]

describe('no value specific', function () {
  it('should return value is false', function () {
    expect(isArrayLikeObject()).toBe(false)
  })
})

describe('typeof value is not object', function () {
  it('should return false ', function () {
    expect(notObjectArr.every((x) => typeof x !== 'object')).toBe(true)
    expect(isArrayLikeObject(function () { })).toBe(false)
  })
})

describe('typeof value is Object, and value.length is between 0 - Number.MAX_SAFE_INTEGER', function () {
  it('should return true', function () {
    const result = testArr.every((x) => isArrayLikeObject(x) === true)
    expect(result).toBe(true)
  })
})
