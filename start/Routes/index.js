
const express = require('express')
const CarsRouters = require('./vehicles.routes')

const routes = express.Router()

routes.use('/veiculos', CarsRouters)
module.exports = routes
