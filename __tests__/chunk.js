/* global describe, it, expect */

const chunk = require('../lib/chunk')

const testArrayFactory = () => [ 1, 2, 3, 4, 5 ]

describe('no array specific', () => {
  const onceChunkedArray = chunk()

  it('should return an array', () => {
    expect(chunk()).toBeInstanceOf(Array)
  })

  it('returned array\'s length should be 0', () => {
    expect(chunk()).toHaveLength(0)
  })

  it('shouldn\'t return the same array with multiple calls', () => {
    expect(chunk()).not.toBe(onceChunkedArray)
  })
})

describe('array without size specific', () => {
  const originalArray = testArrayFactory()

  it('returned array\'s length should be the same as original array\'s', () => {
    expect(chunk(originalArray)).toHaveLength(originalArray.length)
  })

  it('returned array shouldn\'t be the same as original array', () => {
    expect(chunk(originalArray)).not.toBe(originalArray)
  })

  it('returned array\'s content should be the same as original array', () => {
    expect(chunk(originalArray)).toEqual(expect.arrayContaining([[1], [2], [3], [4], [5]]))
  })
})

describe('array with size=4 specific', () => {
  const originalArray = testArrayFactory()

  it('returned array\'s length should be 2', () => {
    expect(chunk(originalArray, 4)).toHaveLength(2)
  })

  it('returned array\'s shouldn\'t be the same as original array', () => {
    expect(chunk(originalArray, 4)).not.toBe(originalArray)
  })

  it('returned array\'s content should be the same as original array', () => {
    expect(chunk(originalArray, 4)).toEqual(expect.arrayContaining([[1, 2, 3, 4], [5]]))
  })
})
