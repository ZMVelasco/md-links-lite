const { validateOneLink, validateAllLinks } = require('../linkvalidation')

describe('validateOneLink', () => {
  test('returns a valid link object with a valid status code', async () => {
    const linkObject = {
      href: 'https://www.google.com'
    }
    const result = await validateOneLink(linkObject)
    expect(result).toEqual({
      href: linkObject.href,
      status: 200,
      message: 'ok'
    })
  })

  it('should return an invalid link object with a status of 404', async () => {
    const linkObject = {
      href: 'https://www.google.com/asdfasdf'
    }
    const result = await validateOneLink(linkObject)
    expect(result).toEqual({
      href: linkObject.href,
      status: 404,
      message: 'fail'
    })
  })
})

describe('validateAllLinks', () => {
  test('returns an array of valid link objects with a valid status code', () => {
    const objectsArray = [
      {
        href: 'https://www.google.com'
      },
      {
        href: 'https://www.facebook.com'
      }
    ]
    validateAllLinks(objectsArray).then(result => expect(result).toEqual([
      {
        href: objectsArray[0].href,
        status: 200,
        message: 'ok'
      },
      {
        href: objectsArray[1].href,
        status: 200,
        message: 'ok'
      }
    ]))
  })

  test('returns an array of invalid link objects with an invalid status code', () => {
    const objectsArray = [
      {
        href: 'https://www.google.com/asdfasdf'
      },
      {
        href: 'https://www.facebook.com/asdfasdf'
      }
    ]
    validateAllLinks(objectsArray).then(result => expect(result).toEqual([
      {
        href: objectsArray[0].href,
        status: 404,
        message: 'fail'
      },
      {
        href: objectsArray[1].href,
        status: 404,
        message: 'fail'
      }
    ]))
  })
})

// describe('validateOneLink', () => {
//   // Test case for a valid link with response status 200
//   test('should validate a valid link with response status 200', async () => {
//     const linkObject = {
//       href: 'https://example.com',
//       text: 'Example',
//       file: './samplefile.md'
//     }
//     const response = { status: 200 }
//     jest.spyOn(global, 'fetch').mockResolvedValue({ ...response })
//     const result = await validateOneLink(linkObject)
//     expect(result).toEqual({
//       ...linkObject,
//       status: response.status,
//       message: 'ok'
//     })
//   })

//   // Test case for an invalid link with response status 404
//   test('should validate an invalid link with response status 404', async () => {
//     const linkObject = {
//       href: 'https://example.com/invalid',
//       text: 'Invalid',
//       file: './samplefile.md'
//     }

//     const response = { status: 404 }

//     jest.spyOn(global, 'fetch').mockResolvedValue({ ...response })

//     const result = await validateOneLink(linkObject)

//     expect(result).toEqual({
//       ...linkObject,
//       status: response.status,
//       message: 'fail'
//     })
//   })

//   // Test case for a link that encounters an error during fetch
//   test('should handle an error during link validation', async () => {
//     const linkObject = {
//       href: 'https://example.com/error',
//       text: 'Error',
//       file: './samplefile.md'
//     }

//     const error = new Error('Fetch error')

//     jest.spyOn(global, 'fetch').mockRejectedValue(error)

//     console.error = jest.fn() // Mock the console.error function

//     const result = await validateOneLink(linkObject)

//     expect(result).toEqual({
//       ...linkObject,
//       status: null,
//       message: 'error'
//     })
//     expect(console.error).toHaveBeenCalledWith(
//       `Link ${linkObject.href} is invalid. Error: ${error.message}`
//     )
//   })
// })

// describe('validateAllLinks', () => {
//   // Test case for validating an array of link objects
//   test('should validate an array of link objects', async () => {
//     const linkObjects = [
//       {
//         href: 'https://example.com/valid',
//         text: 'Valid',
//         file: './samplefile.md'
//       },
//       {
//         href: 'https://example.com/invalid',
//         text: 'Invalid',
//         file: './samplefile.md'
//       }
//     ]

//     const responses = [
//       { status: 200 },
//       { status: 404 }
//     ]

//     jest.spyOn(global, 'fetch').mockImplementation((url) => {
//       const matchingResponse = responses.find((response) => url === response.url)
//       return Promise.resolve({ ...matchingResponse })
//     })

//     const result = await validateAllLinks(linkObjects)

//     expect(result).toEqual([
//       {
//         ...linkObjects[0],
//         status: responses[0].status,
//         message: 'ok'
//       },
//       {
//         ...linkObjects[1],
//         status: responses[1].status,
//         message: 'fail'
//       }
//     ])
//   })
// })
