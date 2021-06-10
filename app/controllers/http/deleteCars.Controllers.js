const CreateCarsSchema = require('../../models/createCars')
const _instanceOfCars = CreateCarsSchema

module.exports = {
  async deleteCar (request, response) {
    try {
      const { id } = request.params

      await _instanceOfCars.findOneAndDelete({ _id: id })

      return response.status(204).send()
    } catch (error) {
      return response.status(400).json({ error: 'Car not found to delete' })
    }
  }
}
