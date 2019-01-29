/* global describe, it, expect */

const toArray = require('../../lib/lang/toArray')
const isArray = require('../../lib/lang/isArray')

const testArr = [ 111, '111', undefined, NaN, { a: 1 }, [1, 2], new Date(), new RegExp() ]

describe('no value specific', function () {
  it('should return Array', function () {
    expect(toArray()).toBeInstanceOf(Array)
  })
  it('should return array\'s length is 0', function () {
    expect(toArray()).toHaveLength(0)
  })
  it('return value shouldn\'t equal itself', function () {
    expect(toArray()).not.toBe(toArray())
  })
})

describe('any typeof value to transform', function () {
  it('should return an array', function () {
    const value = testArr.every((x) => isArray(toArray(x)))
    expect(value).toBe(true)
  })
})
