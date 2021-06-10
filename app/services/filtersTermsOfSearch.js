let result = []

function filtersTermsOfSearch (car, Term) {
  switch (Object.keys(Term)[0]) {
    case 'marca':
      result = car.filter(
        cars => cars.marca === `${Object.values(Term)}`
      )
      break
    case 'model':
      result = car.filter(
        cars => cars.model === `${Object.values(Term)}`
      )
      break
    case 'ano':
      result = car.filter(
        cars => cars.ano === Number(Object.values(Term))
      )
      break

    case 'preco_de_venda':
      result = car.filter(
        cars => cars.preco_de_venda === Number(Object.values(Term))
      )
      break
    case 'versao':
      result = car.filter(
        cars => cars.versao === `${Object.values(Term)}`
      )
      break
    case 'quilometragem':
      result = car.filter(
        cars => cars.quilometragem === Number(Object.values(Term))
      )
      break

    case 'tipo_de_cambio':
      result = car.filter(
        cars => cars.tipo_de_cambio === `${Object.values(Term)}`
      )
      break
    default:
      console.log('term not found')
  }

  return result
}
module.exports = { filtersTermsOfSearch }
