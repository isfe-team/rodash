/* global describe, it, expect */

const isArrayBuffer = require('../../lib/lang/isArrayBuffer')

const testArr = [ undefined, null, false, '', 0, NaN, [111], { a: 1 }, new Date(), new RegExp() ]

describe('no value specific', function () {
  it('should return value is false', function () {
    expect(isArrayBuffer()).toBe(false)
  })
})

describe('typeof value is except arrayBuffer', function () {
  it('should return false ', function () {
    const result = testArr.every((x) => isArrayBuffer(x) === false)
    expect(result).toBe(true)
  })
})

describe('typeof value is arrayBuffer', function () {
  it('should return true', function () {
    expect(isArrayBuffer(new ArrayBuffer(2))).toBe(true)
  })
})
