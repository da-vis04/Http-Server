const path = require("path")

let filePath = path.join(__dirname, 'oath.js')
let fileExtension = path.extname(filePath)
let basename = path.basename(filePath)
console.log(basename);