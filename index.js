const validateRoute = require('./validation.js')
const mdLinks = require('./md-links.js')

console.log(validateRoute('/Users/marianavelasco/md-links-lite/package.json'))
console.log(validateRoute('./README.md'))
console.log(validateRoute('./sdjhgfhaksj'))
mdLinks('md-links.js')
mdLinks('./samplefile.md')
