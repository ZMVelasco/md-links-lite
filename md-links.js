const validateRoute = require('./validation.js')
const fs = require('fs')
// const fsPromises = require('fs').promises
const path = require('path')

const mdLinks = (route) => {
  const routeInfo = validateRoute(route) // Brings the already validated and absolute route
  if (routeInfo.exists) { // Make sure it is validated
    if (path.extname(routeInfo.route) === '.md') { // Extracts the extension of the file and checks if it's .md
      fs.promises.readFile(routeInfo.route, 'utf8') // Only if it's .md it reads the content of the file
        .then((data) => {
          console.log('File text', data) // Logs the content of the file
        })
        .catch((error) => {
          console.error('There was an error reading file', error) // Error code native from node
        })
    } else {
      console.log('It is not a markdown file') // Handles the case that is not a md file
    }
  } else {
    console.log('The file path is not valid') // Case handling when the path isn't valid/absolute
  }
}
module.exports = mdLinks
