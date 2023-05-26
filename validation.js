const path = require('node:path')
const fs = require('fs')
// Function that validates if the route exists and whether or not it is absolute
const validateRoute = (route) => {
  const existsRoute = fs.existsSync(route)
  const newRoute = path.isAbsolute(route) ? route : path.resolve(route)
  return {
    exists: existsRoute,
    route: newRoute
  }
}

module.exports = validateRoute
