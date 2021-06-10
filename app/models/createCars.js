const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cretaCars = new Schema({
  marca: String,
  model: String,
  versao: String,
  ano: Number,
  quilometragem: Number,
  preco_de_venda: Number,
  tipo_de_cambio: String,
  created_At: Date,
  updated_At: Date
})

module.exports = mongoose.model('Veiculos', cretaCars)
