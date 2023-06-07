const fs = require('fs')
// const fsPromises = require('fs').promises
const path = require('path')

const extractLinks = (route) => {
  return new Promise((resolve, reject) => {
    if (path.extname(route) !== '.md') {
      reject(new Error('It is not a markdown file'))
    } else {
      const regex = /\[(.*?)\]\((.*?)\)/g
      fs.promises.readFile(route, 'utf8')
        .then((data) => {
          const linkObjects = []
          let match
          while ((match = regex.exec(data))) {
            const href = match[2]
            const text = match[1]
            linkObjects.push({
              href,
              text,
              file: route
            })
          }
          resolve(linkObjects)
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

module.exports = extractLinks

// extractLinks('./samplefile.md')
//   .then((linkObjects) => {
//     console.log(linkObjects)
//   })
