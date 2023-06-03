/* eslint-disable no-unused-vars */

const validateOneLink = (linkObject) => {
  return fetch(linkObject.href)
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return {
          ...linkObject,
          status: response.status,
          message: 'ok'
        }
      } else {
        return {
          ...linkObject,
          status: response.status,
          message: 'fail'
        }
      }
    })
    .catch((error) => {
      console.error(`Link ${linkObject.href} is invalid. Error: ${error.message}`)
    })
}

function validateAllLinks (links) {
  const validatedLinks = links.map(linkObject => {
    return validateOneLink(linkObject)
  })
  return validatedLinks
}

validateOneLink({ href: 'https://www.google.com/', text: ' Google' }).then(res => {
  console.log(res)
})
