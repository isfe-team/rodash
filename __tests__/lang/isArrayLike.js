/* global describe, it, expect */

const isArrayLike = require('../../lib/lang/isArrayLike')

const testArr = [ [1, 2], [{ a: 1 }, { b: 2 }], '111' ]

describe('no value specific', function () {
  it('should return value is false', function () {
    expect(isArrayLike()).toBe(false)
  })
})

describe('typeof value is function', function () {
  it('should return false ', function () {
    expect(isArrayLike(function () { })).toBe(false)
  })
})

describe('typeof value is not function, and value.length is between 0 - Number.MAX_SAFE_INTEGER', function () {
  it('should return true', function () {
    const result = testArr.every((x) => isArrayLike(x) === true)
    expect(result).toBe(true)
  })
})
