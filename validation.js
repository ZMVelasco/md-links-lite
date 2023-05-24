const path = require('node:path')
const fs = require('fs')
// Function that validates if the route exists and whether or not it is absolute
const validateRoute = (route) => {
  if (fs.existsSync(route)) {
    const validatePath = path.isAbsolute(route)
    if (validatePath) return route // If it is absolute, it returns it as is
    return path.resolve(route) // If it is relative, it turns it into absolute
  }
  return undefined // Route does not exist
}

module.exports = validateRoute
