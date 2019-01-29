/* global describe, it, expect */

const isArguments = require('../../lib/lang/isArguments')

const testArr = [ undefined, null, false, '', 0, NaN, [111], { a: 1 }, new Date(), new RegExp() ]

describe('no value specific', function () {
  it('should return value is false', function () {
    expect(isArguments()).toBe(false)
  })
})

describe('typeof value is except arguments', function () {
  it('should return false ', function () {
    const result = testArr.every((x) => isArguments(x) === false)
    expect(result).toBe(true)
  })
})

describe('typeof value is arguments', function () {
  it('should return true', function () {
    expect(isArguments(function () { return arguments }())).toBe(true)
  })
})
