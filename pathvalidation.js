const path = require('node:path')
const fs = require('fs')

// Function that validates if the route exists and whether or not it is absolute
const validateRoute = (route) => {
  if (!route) {
    return undefined
  }
  const existsRoute = fs.existsSync(route)
  if (!existsRoute) {
    return undefined
  }
  const newRoute = path.isAbsolute(route) ? route : path.resolve(route)
  if (fs.statSync(newRoute).isDirectory()) {
    throw new Error('The route is a directory')
  }
  return newRoute
}

module.exports = validateRoute
