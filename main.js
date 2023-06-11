// const validateRoute = require('./pathvalidation.js')
// const { extractLinks } = require('./extractlinks.js')
// const { validateAllLinks } = require('./linkvalidation.js')

// const mdLinks = (path, options) => {
//   return new Promise((resolve, reject) => {
//     const linkExtraction = extractLinks(path)
//     if (linkExtraction === 'The path does not exist' || linkExtraction === 'It is not a markdown file') {
//       reject(new Error('Invalid path'))
//     } else if (options.validate) {
//       linkExtraction()
//         .then((links) => {
//           if (options.validate) {
//             return validateAllLinks(links)
//           } else {
//             return links
//           }
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     } else {
//       resolve(linkExtraction)
//     }
//   })
// }

// mdLinks('./samplefile.md', { validate: true })
//   .then((linkObjects) => {
//     console.log(linkObjects)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// module.exports = mdLinks
