const validateRoute = require('./validation.js')
const fs = require('fs')
// const fsPromises = require('fs').promises
const path = require('path')

const extractLinks = (route) => {
  const routeInfo = validateRoute(route)// Brings the already validated and absolute route
  if (!routeInfo.exists) {
    return 'The path does not exist' // Case handling when the path isn't valid/absolute
  } else if (path.extname(routeInfo.route) !== '.md') {
    return 'It is not a markdown file' // Case handling when the file isn't .md
  }
  const regex = /(https?:\/\/[^\s]+)/g
  return fs.promises.readFile(routeInfo.route, 'utf8')
    .then((data) => {
      const links = data.match(regex) // Match method already returns an array of the matches
      // console.log('Links in file:', links)
      return links
    })
    .catch((error) => {
      console.error('There was an error reading file', error)
    })
} // Integrar texto y ruta

module.exports = extractLinks
