const CreateCarsSchema = require('../../models/createCars')
const _instanceOfCars = CreateCarsSchema

module.exports = {

  async createCars (request, response) {
    const {
      marca,
      model,
      versao,
      ano,
      quilometragem,
      preco_de_venda,
      tipo_de_cambio
    } = request.body

    try {
      const checkIfExistIsqualCar = await _instanceOfCars.findOne({
        marca,
        model,
        versao,
        ano
      })

      if (checkIfExistIsqualCar) {
        return response
          .json('this car Already exists! please try to create with outher, marca , model , versao, and ano ')
      }

      const cars = await _instanceOfCars.create({
        marca,
        model,
        versao,
        ano,
        quilometragem,
        preco_de_venda,
        tipo_de_cambio,
        created_At: new Date(),
        updated_At: new Date()
      })
      return response.status(201).json(cars)
    } catch (error) {
      return response.status(400).json({ error: 'error when trying to create a car' })
    }
  }

}
