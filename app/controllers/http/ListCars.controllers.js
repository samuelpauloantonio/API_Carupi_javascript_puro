const CreateCarsSchema = require('../../models/createCars')
const _instanceOfCars = CreateCarsSchema
const { filtersTermsOfSearch } = require('../../services/filtersTermsOfSearch')

module.exports = {

  async findAllCars (request, response) {
    try {
      const findedCars = await _instanceOfCars.find({})

      return response.status(200).json(findedCars)
    } catch (error) {
      return response.status(400).json({ error: 'empty car list please create a car' })
    }
  },

  async findOneCar (request, response) {
    try {
      const { id } = request.params
      const OneCar = await _instanceOfCars.findById(id)

      if (!OneCar) return response.status(400).json('Car no found ')

      return response.status(200).json(OneCar)
    } catch (error) {
      return response.status(400).json({ error: 'Car not found to list ' })
    }
  },

  async findCarsByFilter (request, response) {
    try {
      const term = request.query

      const Listterm = [
        'marca',
        'model',
        'ano',
        'preco_de_venda',
        'versao',
        'quilometragem',
        'tipo_de_cambio'
      ]

      const ensureHasTerm = Listterm.some(
        value => value === Object.keys(term)[0]
      )

      if (!ensureHasTerm || Object.keys(term).length >= 2) {
        throw new Error(
          'Please,  submit a single correct term to search for one or more cars'
        )
      }

      const car = await _instanceOfCars.find({})

      const termFiltered = filtersTermsOfSearch(car, term)

      return response.json(termFiltered)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

}
