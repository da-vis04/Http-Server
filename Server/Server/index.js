const path = require('path')
const fs = require('fs')
const http = require('http')

const server = http.createServer((request, Response) =>{
    if (request.url === '/') {
        let filePath = path.join(__dirname, 'html', 'index.html')
        fs.readFile(filePath, 'utf-8', (err, data) =>{
            Response.end(data)
        })
    }
    if (request.url === '/contact.html') {
        let filePath = path.join(__dirname, 'html', 'contact.html')
        fs.readFile(filePath, 'utf-8', (err, data) =>{
            Response.end(data)
        })
    }
    if (request.url === '/About.html') {
        let filePath = path.join(__dirname, 'html', '/About.html')
        fs.readFile(filePath, 'utf-8', (err, data) =>{
            Response.end(data)
        })
    }
})

const port = 5000
server.listen(port, () =>{
    console.log("server is running on port " , (port))
})