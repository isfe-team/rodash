/* global describe, it, expect */

const toNumber = require('../../lib/lang/toNumber')
const isNumber = require('../../lib/lang/isNumber')

const testArr = [ 111, '111', undefined, NaN, { a: 1 }, [1, 2], new Date(), new RegExp(), Number.MIN_VALUE, Infinity, Number.MIN_VALUE ]

describe('no value specific', function () {
  it('should return NaN', function () {
    expect(toNumber()).toBeNaN()
  })
})

describe('any typeof value to transform', function () {
  it('should return value typeof is Number ', function () {
    const value = testArr.every((x) => isNumber(toNumber(x)))
    expect(value).toBe(true)
  })
})
