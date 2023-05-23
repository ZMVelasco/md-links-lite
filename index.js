// const fs = require('fs')
const path = require('node:path')

function convertToAbsolutePath (relativePath) {
  if (path.isAbsolute(relativePath)) {
    return relativePath // If the path is already absolute, return it as is
  } else {
    return path.resolve(process.cwd(), relativePath) // Convert the relative path to an absolute path
  }
}

const filePath = 'relative/path/to/file.txt'
const absolutePath = convertToAbsolutePath(filePath)
console.log('Absolute path:', absolutePath)
// const readSingleFile = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         reject(err) // Reject with the actual error received from fs.readFile
//       } else {
//         resolve({ data, message: 'File read' })
//       }
//     })
//   })
// }

// readSingleFile('samplefile.md')
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.error('Error reading file:', err)
//   })
