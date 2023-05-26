const path = require('node:path')
const fs = require('fs')
// Function that validates if the route exists and whether or not it is absolute
const validateRoute = (route) => {
  const existsRoute = fs.existsSync(route) // Checks that the route does exist
  const newRoute = path.isAbsolute(route) ? route : path.resolve(route) // If it's absolute, returns it as is, if not, turns it into absolute
  return { // returns an object
    exists: existsRoute, // true or false depending on its existence
    route: newRoute // returns the absolute route
  }
}

module.exports = validateRoute
