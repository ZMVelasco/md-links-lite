// const path = require('node:path')
const fs = require('fs')
const extractLinks = require('../extractlinks.js')

describe('extractLinks', () => {
  // Test case for a valid path with markdown file
  test('should extract links from a valid path with a markdown file', async () => {
    const route = './samplefile.md'
    const expectedLinks = [
      {
        file: './samplefile.md',
        href: 'https://jestjs.io/docs/expect',
        text: 'Jest Documentation'
      },
      {
        file: './samplefile.md',
        href: 'https://htmlcolorcodes.com/',
        text: 'HTML Color Codes'
      },
      {
        file: './samplefile.md',
        href: 'https://exercism.org/',
        text: 'JavaScript Exercises'
      }
    ]

    const links = await extractLinks(route)

    expect(links).toEqual(expectedLinks)
  })

  // Test case for a non-markdown file
  test('should return an error for a non-markdown file', async () => {
    const route = 'main.js'

    await expect(extractLinks(route)).rejects.toThrow('It is not a markdown file')
  })

  test('should reject with an error if file reading fails', () => {
    const route = './nonexistent.md'

    jest.spyOn(fs.promises, 'readFile').mockRejectedValue(new Error('File reading failed'))

    return expect(extractLinks(route)).rejects.toThrowError('File reading failed')
  })
})
// describe('extractLinks', () => {
//   test('is a function', () => {
//     expect(typeof extractLinks).toBe('function')
//   })
//   test('if route exists and is absolute, returns it unmodified', () => {
//     const absolutePath = '/Users/marianavelasco/md-links-lite/samplefile.md'
//     const expectedResult = validateRoute(route)
//     const result = validateRoute(route)
//     expect(result).toBe(expectedResult)
//   })
//   test('if route exists and is relative, turns it to absolute', () => {
//     const route = 'samplefile.md'
//     const expectedResult = path.resolve(route)
//     const result = validateRoute(route)
//     expect(result).toBe(expectedResult)
//   })

//   test('returns undefined if route does not exist', () => {
//     const route = 'null.js'
//     const result = validateRoute(route)
//     expect(result).toBeUndefined()
//   })
// })
