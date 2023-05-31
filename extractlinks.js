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
  const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1>(.*?)<\/a>/g
  return fs.promises
    .readFile(routeInfo.route, 'utf8')
    .then((data) => {
      const linkObjects = []
      let match
      while ((match = regex.exec(data))) {
        const href = match[2]
        const text = match[3]
        linkObjects.push({
          href,
          text,
          file: routeInfo.route
        })
      }
      return linkObjects
    })
    .catch((error) => {
      console.error('There was an error reading file', error)
    })
}

module.exports = extractLinks
