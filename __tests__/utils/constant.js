/* global describe, it, expect */

const constant = require('../../lib/utils/constant')

const testValue = [{ a: 1, b: 2 }]

describe('no value specific', function () {
  it('should return Function', function () {
    expect(constant()).toBeInstanceOf(Function)
  })
  it('return results of execution is Undefined', function () {
    expect(constant()()).toBeUndefined()
  })
})

describe('any typeof value', function () {
  it('should return Function', function () {
    expect(constant(testValue)).toBeInstanceOf(Function)
  })
  it('return results of execution is equal param', function () {
    expect(constant(testValue)()).toEqual(testValue)
  })
})
