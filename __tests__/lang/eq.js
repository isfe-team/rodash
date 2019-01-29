/* global describe, it, expect */

const eq = require('../../lib/lang/eq')

const testValue = { 'a': 1, 'b': 2, 'c': 3 }

describe('no value specific', function () {
  it('should return value is true', function () {
    expect(eq()).toBe(true)
  })
})

describe('value is NaN', function () {
  it('should return true', function () {
    expect(eq(NaN, NaN)).toBe(true)
  })
})

describe('any value except NaN', function () {
  const value1 = testValue
  const value2 = testValue
  it('should return value is boolean', function () {
    expect(eq(value1, value2)).toBe(value1 === value2)
  })
})
