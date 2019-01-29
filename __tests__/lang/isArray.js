/* global describe, it, expect */

const isArray = require('../../lib/lang/isArray')

const testArr = [ undefined, null, false, '', 0, NaN, { a: 1 }, new Date(), new RegExp(), new ArrayBuffer() ]

describe('no value specific', function () {
  it('should return value is false', function () {
    expect(isArray()).toBe(false)
  })
})

describe('typeof value is except array', function () {
  it('should return false ', function () {
    const result = testArr.every((x) => isArray(x) === false)
    expect(result).toBe(true)
  })
})

describe('typeof value is array', function () {
  it('should return true', function () {
    expect(isArray([1, 2])).toBe(true)
  })
})
