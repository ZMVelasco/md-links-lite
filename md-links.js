const validateRoute = require('./validation.js')
// const fs = require('fs')
const path = require('path')

const mdLinks = (route) => {
  const absolutePath = validateRoute(route)
  if (absolutePath) {
    if (path.extname(absolutePath) === '.md') {
      console.log('It is a markdown file.')
    } else {
      console.log('The file is not .md')
    }
  } else {
    console.log('Invalid file path.')
  }
}

module.exports = mdLinks
