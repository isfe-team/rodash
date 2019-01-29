/* global describe, it, expect */

const conformsTo = require('../../lib/lang/conformsTo')

const testObjectFirst = { 'a': 1, 'b': 2, 'c': 3 }
const testObjectSecond = { 'b': function (n) { return n > 2 } }

describe('no value specific', function () {
  it('should return value is true', function () {
    expect(conformsTo()).toBe(true)
  })
})

describe('firstValue is exsit without secondValue specifix', function () {
  it('should return value is true', function () {
    expect(conformsTo(testObjectFirst)).toBe(true)
  })
})

describe('typeof firstValue and secondValue is object', function () {
  it('firstvalue value is accord secondvalue function', function () {
    expect(conformsTo(testObjectFirst, testObjectSecond)).toBe(testObjectSecond.b(testObjectFirst.b))
  })
})
