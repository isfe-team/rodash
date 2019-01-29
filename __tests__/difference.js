/* global describe, it, expect */

const difference = require('../lib/array/difference')

const anyTypeValue = [null, undefined, NaN, 111, '111', { a: 1 }, new Date()]
const testArray = () => [ 1, 2, 3, 4 ]

describe('no value specific', function () {
  it('should return value is empty ayyay', function () {
    expect(difference()).toBeInstanceOf(Array)
    expect(difference()).toHaveLength(0)
  })
})

describe('typeof value is not array', function () {
  it('should return value is empty ayyay', function () {
    const origninalValue = anyTypeValue
    origninalValue.forEach((x) => {
      expect(difference(x, x)).toBeInstanceOf(Array)
      expect(difference(x, x)).toHaveLength(0)
    })
  })
})

describe('typeof value is array', function () {
  const value1 = testArray().slice(0, 2)
  const value2 = testArray().slice(2, 3)
  const value3 = testArray().slice(1, 4)
  it('should return array', function () {
    expect(difference(value1, value2)).toBeInstanceOf(Array)
  })
  it('should return no across value', function () {
    expect(difference(value1, value2, value3)).toHaveLength(1)
    expect(difference(value1, value2, value3)).not.toBe(value1)
  })
})
