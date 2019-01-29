/* global describe, it, expect */

const toLength = require('../../lib/lang/toLength')
const isLength = require('../../lib/lang/isLength')

const testArr = [ 111, '111', undefined, NaN, { a: 1 }, [1, 2], new Date(), new RegExp(), Number.MIN_VALUE, Infinity, Number.MIN_VALUE ]
const MAX_ARRAY_LENGTH = 4294967295

describe('no value specific', function () {
  it('should return 0', function () {
    expect(toLength()).toBe(0)
  })
})

describe('any typeof value to transform', function () {
  it('should return value typeof is Length ', function () {
    const value = testArr.every((x) => isLength(toLength(x)))
    expect(value).toBe(true)
  })
  it('return value has range', function () {
    const rangeValue = testArr.every((x) => toLength(x) >= 0 && toLength(x) <= MAX_ARRAY_LENGTH)
    expect(rangeValue).toBe(true)
  })
})
