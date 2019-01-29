/* global describe, it, expect */

const bindAll = require('../../lib/utils/bindAll')

const testArray = [1, null, undefined, [111], { a: 1 }, new Date()]
const testParamObject = { 'name': 'lisa', 'click': function () { console.log(this.name) } }
const testParamArray = ['click']

describe('no value specific', function () {
  it('should return undefined', function () {
    expect(bindAll()).toBeUndefined()
  })
})

describe('firstParam is any typeof without secondParam specific', function () {
  it('should return itself', function () {
    const result = testArray.every((x) => bindAll(x) === x)
    expect(result).toBe(true)
  })
})

describe('secondArray\'s value is belong to firstObject\'s key', function () {
  it('should return Object', function () {
    expect(bindAll(testParamObject, testParamArray)).toBeInstanceOf(Object)
  })
  it('returnd value is equal itself', function () {
    expect(bindAll(testParamObject, testParamArray)).toEqual(testParamObject)
  })
})
