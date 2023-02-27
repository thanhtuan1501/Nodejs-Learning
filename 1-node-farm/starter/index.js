const fs = require('fs')
const http = require('http')
const url = require('url')

/////////////SERVER//////////////
const server = http.createServer((req, res) => {
    console.log("🚀 ~ f ile: index.js:6 ~ server ~ req:", req.url)
    res.end('hello from the sever')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000')
})