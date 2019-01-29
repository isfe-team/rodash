/* global describe, it, expect */

const toString = require('../../lib/lang/toString')
const isString = require('../../lib/lang/isString')

const testArr = [ 111, '111', undefined, NaN, { a: 1 }, [1, 2], new Date(), new RegExp(), Number.MIN_VALUE, Infinity, Number.MIN_VALUE ]
const nagetiveArr = [ -0, -1, -100, -Infinity ]

describe('no value specific', function () {
  it('should return String', function () {
    expect(toString()).toBe('')
  })
})

describe('value is nagetive(-0)', function () {
  it('should return string', function () {
    const value = nagetiveArr.every((x) => isString(toString(x)))
    expect(value).toBe(true)
  })
  it('return value\'s length is greater then 1', function () {
    const value = nagetiveArr.every((x) => toString(x).length > 1)
    expect(value).toBe(true)
  })
})

describe('any typeof value to transform', function () {
  it('should return value typeof is String ', function () {
    const value = testArr.every((x) => isString(toString(x)))
    expect(value).toBe(true)
  })
})
