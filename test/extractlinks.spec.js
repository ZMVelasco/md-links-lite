// const path = require('node:path')
// const fs = require('fs')
const extractLinks = require('../extractlinks.js')

describe('extractLinks', () => {
  // Test case for a valid path with markdown file
  it('should extract links from a valid path with markdown file', async () => {
    const route = 'samplefile.md'
    const expectedLinks = ['https://jestjs.io/docs/getting-started', 'https://htmlcolorcodes.com/']
    const links = await extractLinks(route)
    expect(links).toEqual(expectedLinks)
  })

  // Test case for invalid path
  it('should return an error message for an invalid path', async () => {
    const route = 'asjdfslh.md'

    const links = await extractLinks(route)

    expect(links).toEqual('The path does not exist')
  })

  // Test case for non-markdown file
  it('should return an error message for a non-markdown file', async () => {
    const route = 'main.js'

    const links = await extractLinks(route)

    expect(links).toEqual('It is not a markdown file')
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
