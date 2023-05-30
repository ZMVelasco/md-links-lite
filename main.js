const fetch = require('fetch')
const extractLinks = require('./extractlinks')

// Creates an HTTP request for each link
const processLinks = (route) => {
  return extractLinks(route)
    .then((links) => {
      const requests = links.map((link) => {
        return fetch(link)
          .then((response) => {
            console.log(`Link ${link} is valid. Status: ${response.status}`)
          })
          .catch((error) => {
            console.error(`Link ${link} is invalid. Error: ${error.message}`)
          })
      })

      return Promise.all(requests)
    })
    .catch((error) => {
      console.error('Error extracting links:', error)
    })
}

module.exports = processLinks
