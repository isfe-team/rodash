/* global describe, it, expect */

const cloneDeep = require('../../lib/lang/cloneDeep')

const originArrayValue = [{ a: 1 }, { b: 3 }]
const originObjectValue = { a: 1, b: 2 }
const randomArr = [111, null, '111', false, undefined]

describe('no value', function () {
  it('should return undefined', function () {
    expect(cloneDeep()).toBeUndefined()
  })
})

describe('value type is array', function () {
  let cloneValue = cloneDeep(originArrayValue)
  cloneValue[0].a = Math.random()
  it('return value shouldn\t equal itself', function () {
    expect(cloneDeep(originArrayValue)).toBeInstanceOf(Array)
    expect(cloneDeep(originArrayValue)).not.toBe(originArrayValue)
    expect((cloneDeep(originArrayValue)[0])).not.toBe(originArrayValue[0])
    expect(cloneValue[0].a).not.toBe(originArrayValue[0].a)
  })
})

describe('typeof value is object', function () {
  it('return value shouldn\t equal itself', function () {
    expect(cloneDeep(originObjectValue)).toBeInstanceOf(Object)
    expect(cloneDeep(originObjectValue)).not.toBe(originObjectValue)
    expect(cloneDeep(originObjectValue).a).toBe(originObjectValue.a)
  })
})

describe('except the vaule type above', function () {
  const value = randomArr.every((x) => x === cloneDeep(x))
  it('return value equal itself', function () {
    expect(value).toBe(true)
  })
})
