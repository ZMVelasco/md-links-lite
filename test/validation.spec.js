const path = require('node:path')
// const fs = require('fs')
const validateRoute = require('../validation')

describe('validateRoute', () => {
  test('is a function', () => {
    expect(typeof validateRoute).toBe('function')
  })
  test('if route exists and is absolute, returns it unmodified', () => {
    const route = '/Users/marianavelasco/md-links-lite/samplefile.md'
    const expectedResult = validateRoute(route)
    const result = validateRoute(route)
    expect(result).toBe(expectedResult)
  })
  test('if route exists and is relative, turns it to absolute', () => {
    const route = 'samplefile.md'
    const expectedResult = path.resolve(route)
    const result = validateRoute(route)
    expect(result).toBe(expectedResult)
  })

  test('returns undefined if route does not exist', () => {
    const route = 'null.js'
    const result = validateRoute(route)
    expect(result).toBeUndefined()
  })
})
