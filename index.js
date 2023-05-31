const validateRoute = require('./validation.js')
const extractLinks = require('./extractlinks.js')
const mdLinks = require('./main.js')

console.log(validateRoute('/Users/marianavelasco/md-links-lite/package.json'))
console.log(validateRoute('./README.md'))
console.log(validateRoute('./sdjhgfhaksj'))
// extractLinks('extractlinks.js')
// extractLinks('./samplefile.md')
extractLinks('./samplefile.md')
  .then((links) => {
    console.log('Links in file:', links)
  })
  .catch((error) => {
    console.error('Error extracting links:', error)
  })

mdLinks('./samplefile.md')
  .then(() => {
    console.log('The links have been processed')
  })
  .catch((error) => {
    console.error('Error processing links', error)
  })
