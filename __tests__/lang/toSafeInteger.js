/* global describe, it, expect */

const toSafeInteger = require('../../lib/lang/toSafeInteger')
const isNumber = require('../../lib/lang/isNumber')
const isInteger = require('../../lib/lang/isInteger')

const testArr = [ 111, '111', undefined, NaN, { a: 1 }, [1, 2], new Date(), new RegExp(), Number.MIN_VALUE, Infinity, Number.MIN_VALUE ]

describe('no value specific', function () {
  it('should return 0', function () {
    expect(toSafeInteger()).toBe(0)
  })
})

describe('any typeof value to transform', function () {
  it('should return value typeof is Number ', function () {
    const value = testArr.every((x) => isNumber(toSafeInteger(x)))
    expect(value).toBe(true)
  })
  it('should return value is integer', function () {
    const value = testArr.every((x) => isInteger(toSafeInteger(x)))
    expect(value).toBe(true)
  })
  it('return value is between safe range', function () {
    const value = testArr.every((x) => toSafeInteger(x) >= Number.MIN_SAFE_INTEGER && toSafeInteger(x) <= Number.MAX_SAFE_INTEGER)
    expect(value).toBe(true)
  })
})
