const { validationResult } = require('express-validator')

function CheckFileds (
  request,
  response,
  next
) {
  const erros = validationResult(request)

  if (!erros.isEmpty()) {
    return response.status(400).json(erros.array())
  }

  next()
}
module.exports = { CheckFileds }
