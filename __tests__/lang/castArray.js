/* global describe, it, expect */

const castArray = require('../../lib/lang/castArray')

const emptyArray = [ ]
const originalValue = [1, 2]

describe('no value', function () {
  it('return empty array', function () {
    expect(castArray()).toEqual(emptyArray)
  })
})

describe('typeof value is array', function () {
  it('return array equal original array', function () {
    expect(castArray(originalValue)).toEqual(originalValue)
  })
})

describe('typeof value is not array', function () {
  const value = { }
  it('return value typeof is array', function () {
    expect(castArray(value)).toBeInstanceOf(Array)
  })
  it('return originvalue with []', function () {
    expect(castArray(value)).toEqual([value])
  })
})
