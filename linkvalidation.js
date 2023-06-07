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

const validateAllLinks = (objectsArray) => {
  const validatedLinks = objectsArray.map(validateOneLink)
  return Promise.all(validatedLinks)
}

module.exports = { validateOneLink, validateAllLinks }
