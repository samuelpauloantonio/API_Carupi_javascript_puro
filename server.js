const { config } = require('dotenv')
config()
require('./database')
const express = require('express')
const routes = require('./start/Routes')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(routes)


server.listen(process.env.PORT_SERVER, function () {
    console.log(`🚀 servidor is running ,  at http://localhost:${process.env.PORT_SERVER}/veiculos`)
  })
  

