/* global describe, it, expect */

const attempt = require('../../lib/utils/attempt')

const testFunction = (a) => { return a.join(',') }
const testValue = [1, 2]

describe('no value specific', function () {
  it('should return TypeError', function () {
    expect(attempt()).toBeInstanceOf(Error)
  })
})

describe('args is not accord func', function () {
  it('should return TypeError', function () {
    expect(attempt(testFunction, 1)).toBeInstanceOf(Error)
  })
})

describe('args is accord func', function () {
  it('should return not typeError', function () {
    expect(attempt(testFunction, testValue)).not.toBeInstanceOf(Error)
    expect(attempt(testFunction, testValue)).toEqual(testFunction(testValue))
  })
})
