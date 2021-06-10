const {config} = require('dotenv')
config()
require('./database')
const express = require('express')
const routes = require('./start/Routes')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(routes)


server.listen(3333, function () {
  console.log('🚀 servidor is running')
})
