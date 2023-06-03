const validateRoute = require('./requests.js')
const fs = require('fs')
// const fsPromises = require('fs').promises
const path = require('path')

const extractLinks = (route) => {
  return new Promise((resolve, reject) => {
    const routeInfo = validateRoute(route)
    if (!routeInfo.exists) {
      reject(new Error('The path does not exist'))
    } else if (path.extname(routeInfo.route) !== '.md') {
      reject(new Error('It is not a markdown file'))
    }
    const regex = /\[(.*?)\]\((.*?)\)/g
    fs.promises.readFile(routeInfo.route, 'utf8')
      .then((data) => {
        const linkObjects = []
        let match
        while ((match = regex.exec(data))) {
          const href = match[2]
          const text = match[1]
          linkObjects.push({
            href,
            text,
            file: routeInfo.route
          })
        }
        resolve(linkObjects)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

extractLinks('./samplefile.md')
  .then((linkObjects) => {
    console.log(linkObjects)
  })
module.exports = extractLinks
