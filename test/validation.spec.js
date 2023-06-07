// const path = require('node:path')
const fs = require('fs')
const validateRoute = require('../pathvalidation')

describe('validateRoute', () => {
  test('is a function', () => {
    expect(typeof validateRoute).toBe('function')
  })
  test('if route exists and is absolute, returns it unmodified', () => {
    const route = '/Users/marianavelasco/md-links-lite/samplefile.md'
    const expectedResult = route
    const result = validateRoute(route)
    expect(result).toEqual(expectedResult)
  })
  test('if route exists and is relative, turns it to absolute', () => {
    const route = 'samplefile.md'
    const expectedResult = '/Users/marianavelasco/md-links-lite/samplefile.md'
    const result = validateRoute(route)
    expect(result).toEqual(expectedResult)
  })

  test('returns undefined if route does not exist', () => {
    const route = 'null.js'
    const result = validateRoute(route)
    const expectedResult = undefined
    expect(result).toEqual(expectedResult)
  })

  test('returns undefined for an empty route', () => {
    const route = ''
    const result = validateRoute(route)
    expect(result).toBeUndefined()
  })
  test('throws an error for a directory route', () => {
    const route = './directory'
    jest.spyOn(fs, 'existsSync').mockReturnValue(true)
    jest.spyOn(fs, 'statSync').mockReturnValue({ isDirectory: () => true })

    expect(() => {
      validateRoute(route)
    }).toThrowError('The route is a directory')
  })
})
