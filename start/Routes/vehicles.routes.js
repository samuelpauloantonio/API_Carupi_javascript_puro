const express = require('express')

const routes = express.Router()

const createCarsControllers = require('../../app/controllers/http/createCars.Controllers')
const ListCarsControllers = require('../../app/controllers/http/ListCars.controllers')
const UpdateCarsControllers = require('../../app/controllers/http/updateCars.Controllers')
const DeleteCarsControllers = require('../../app/controllers/http/deleteCars.Controllers')
const { fieldTovalidate } = require('../../app/validators/fieldToValidate')
const { CheckFileds } = require('../../app/validators/validator.body')

routes.get('/search', ListCarsControllers.findCarsByFilter)
routes.get('/', ListCarsControllers.findAllCars)
routes.get('/:id', ListCarsControllers.findOneCar)
routes.post('/', fieldTovalidate, CheckFileds, createCarsControllers.createCars)
routes.put('/:id', fieldTovalidate, CheckFileds, UpdateCarsControllers.updateCar)
routes.delete('/:id', DeleteCarsControllers.deleteCar)

module.exports = routes
