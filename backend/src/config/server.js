const port = 3003

const bodyParses = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParses.urlencoded({ extended: true }))
server.use(bodyParses.json())

server.listen(port, function(){
    console.log(`Backend is running on port ${port}`)
})

module.exports = server