const validateRoute = require('./validation.js')
const mdLinks = require('./md-links.js')

console.log(validateRoute('./README.md'))
mdLinks('./README.md')
