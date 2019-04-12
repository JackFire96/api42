// Dependencies
const validator = require('node-validator')

// Schemas
module.exports = validator.isObject()
  .withRequired('title', validator.isString())
  .withRequired('text', validator.isString())
  .withOptional('date', validator.isIsoDate())
  .withOptional('author', validator.isString())
