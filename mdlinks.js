const extractLinks = require('./extractlinks')
const validateRoute = require('./pathvalidation')
const { validateAllLinks } = require('./linkvalidation')

const mdlinks = (route, options) => {
  const validRoute = validateRoute(route)
  if (!validRoute) throw new Error('Invalid route, please try again')
  const links = extractLinks(validRoute)
  if (!options) return links
  // console.log(options)
  if (options.validate) {
    return links.then(response => validateAllLinks(response))
  } else {
    return links
  }
}

mdlinks('./README.md', { validate: true })
  .then(response => console.log(response))
  .catch(err => console.log(err))
