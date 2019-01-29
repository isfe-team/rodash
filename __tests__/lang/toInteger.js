/* global describe, it, expect */

const toInteger = require('../../lib/lang/toInteger')
const isNumber = require('../../lib/lang/isNumber')
const isInteger = require('../../lib/lang/isInteger')

const testArr = [ 111, '111', undefined, NaN, { a: 1 }, [1, 2], new Date(), new RegExp(), Number.MIN_VALUE, Infinity, Number.MIN_VALUE ]

describe('no value specific', function () {
  it('should return 0', function () {
    expect(toInteger()).toBe(0)
  })
})

describe('any typeof value to transform', function () {
  it('should return a number', function () {
    const value = testArr.every((x) => isNumber(toInteger(x)))
    expect(value).toBe(true)
  })
  it('should return number is integer', function () {
    const value = testArr.every((x) => isInteger(toInteger(x)))
    expect(value).toBe(true)
  })
})
