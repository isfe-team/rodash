/* global describe, it, expect */

const compact = require('../lib/compact')

const getFalsyValues = () => [ undefined, null, false, '', 0, NaN ]
const testArrayFactory = () => [ 0, 1, 2, 3, 4, 5 ]
const withFalsyValuesArrayFactory = () => testArrayFactory().concat(getFalsyValues())

describe('no array specific', () => {
  const onceChunkedArray = compact()

  it('should return an array', () => {
    expect(compact()).toBeInstanceOf(Array)
  })

  it('returned array\'s length should be 0', () => {
    expect(compact()).toHaveLength(0)
  })

  it('shouldn\'t return the same array with multiple calls', () => {
    expect(compact()).not.toBe(onceChunkedArray)
  })
})

describe('returned array shouldn\'t contain falsy value', () => {
  const originalArray = withFalsyValuesArrayFactory()

  it('returned array shouldn\'t be the same as original array', () => {
    expect(compact(originalArray)).not.toBe(originalArray)
  })

  it('returned array\'s content should contains all truthy values', () => {
    expect(compact(originalArray)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]))
  })

  it('returned array\'s content should be all truthy values', () => {
    const hasNoFalsyValue = compact(originalArray).every((x) => !!x)
    expect(hasNoFalsyValue).toBeTruthy()
  })
})
