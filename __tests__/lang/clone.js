/* global describe, it, expect */

const clone = require('../../lib/lang/clone')

const originArrayValue = [{ a: 1 }, { b: 3 }]
const originObjectValue = { a: 1, b: 2 }
const randomArr = [111, null, '111', false, undefined]

describe('no value', function () {
  it('should return undefined', function () {
    expect(clone()).toBe(undefined)
  })
})

describe('value type is array', function () {
  let cloneValue = clone(originArrayValue)
  cloneValue[0].a = Math.random()
  it('return value shouldn\t equal itself', function () {
    expect(clone(originArrayValue)).toBeInstanceOf(Array)
    expect(clone(originArrayValue)).not.toBe(originArrayValue)
    expect((clone(originArrayValue)[0])).toBe(originArrayValue[0])
    expect(cloneValue[0].a).toBe(originArrayValue[0].a)
  })
})

describe('typeof value is object', function () {
  it('return value shouldn\t equal itself', function () {
    expect(clone(originObjectValue)).toBeInstanceOf(Object)
    expect(clone(originObjectValue)).not.toBe(originObjectValue)
    expect(clone(originObjectValue).a).toBe(originObjectValue.a)
  })
})

describe('except the vaule type above', function () {
  const value = randomArr.every((x) => x === clone(x))
  it('return value equal itself', function () {
    expect(value).toBe(true)
  })
})
