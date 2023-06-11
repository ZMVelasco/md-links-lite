const fs = require('fs')
const extractLinks = require('../extractlinks.js')

describe('extractLinks', () => {
  // Test case for a valid path with markdown file
  test('extracts links from a valid path with a markdown file', () => {
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
      },
      {
        file: './samplefile.md',
        href: 'https://exercism.org/iudskfhfoasfhawf',
        text: 'Invalid link'
      }
    ]

    return extractLinks(route)
      .then(links => {
        expect(links).toEqual(expectedLinks)
      })
  })

  // Test case for a non-markdown file
  test('returns an error for a non-markdown file', () => {
    const route = 'main.js'

    return extractLinks(route)
      .catch(error => {
        expect(error.message).toBe('It is not a markdown file')
      })
  })
})

test('rejects with an error if file reading fails', () => {
  const route = './nonexistent.md'

  jest.spyOn(fs.promises, 'readFile').mockRejectedValue(new Error('File reading failed'))

  return expect(extractLinks(route)).rejects.toThrowError('File reading failed')
})
