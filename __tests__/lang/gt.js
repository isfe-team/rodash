/* global describe, it, expect */

const gt = require('../../lib/lang/gt')

const testValueFirst = 3
const testValueSecond = 2

describe('no value specific', function () {
  it('should return value is false', function () {
    expect(gt()).toBe(false)
  })
})

describe('any typeof value', function () {
  it('the result is equal comparison between value1 and Value2  ', function () {
    expect(gt(testValueFirst, testValueSecond)).toBe(testValueFirst > testValueSecond)
  })
})
