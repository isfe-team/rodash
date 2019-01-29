/* global describe, it, expect */

const toFinite = require('../../lib/lang/toFinite')
const isNumber = require('../../lib/lang/isNumber')

const testArr = [ 111, '111', undefined, NaN, { a: 1 }, [1, 2], new Date(), new RegExp(), Number.MIN_VALUE, Infinity, Number.MIN_VALUE ]

describe('no value specific', function () {
  it('should return 0', function () {
    expect(toFinite()).toBe(0)
  })
})

describe('any typeof value to transform', function () {
  it('should return a number', function () {
    const value = testArr.every((x) => isNumber(toFinite(x)))
    expect(value).toBe(true)
  })
  it('return value has range', function () {
    const rangeValue = testArr.every((x) => toFinite(x) >= -1.7976931348623157e+308 && toFinite(x) <= 1.7976931348623157e+308)
    expect(rangeValue).toBe(true)
  })
})
