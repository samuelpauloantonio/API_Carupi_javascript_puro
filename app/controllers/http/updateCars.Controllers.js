
const CreateCarsSchema = require('../../models/createCars')
const _instanceOfCars = CreateCarsSchema

module.exports = {

  async updateCar (request, response) {
    try {
      const { id } = request.params
      await _instanceOfCars.findById(id)

      const data = {
        ...request.body,
        updated_At: new Date()
      }

      const find_CarToUpdate = await _instanceOfCars.findByIdAndUpdate(id, data)

      return response.status(201).json(find_CarToUpdate)
    } catch (error) {
      return response.status(400).json({ error: 'Car not found  to update' })
    }
  }
}
