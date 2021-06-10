/* eslint-disable no-undef */
const request = require('supertest')
const express = require('express')

const app = express()

app.get('/veiculos', function (req, res) {
  res.status(200).json({
    marca: 'Toita',
    model: 'X9j0',
    versao: '22',
    ano: '20313',
    quilometragem: 3366,
    preco_de_venda: 2000,
    tipo_de_cambio: 'vendido'
  })
})

request(app)
  .get('/veiculos')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) throw err
  })

describe('GET /veiculos', function () {
  it('Teste Route Get  Response JSON and  statusCODE 200', function (done) {
    request(app)
      .get('/veiculos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
