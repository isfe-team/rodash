/* global describe, it, expect */

const gte = require('../../lib/lang/gte')

const testValueFirst = 3
const testValueSecond = 2

describe('no value specific', function () {
  it('should return value is false', function () {
    expect(gte()).toBe(false)
  })
})

describe('any typeof value', function () {
  it('the result is equal comparison between value1 and Value2  ', function () {
    expect(gte(testValueFirst, testValueSecond)).toBe(testValueFirst >= testValueSecond)
  })
})
