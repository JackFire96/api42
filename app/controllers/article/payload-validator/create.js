// Dependencies
const validator = require('node-validator')

// Schemas
module.exports = validator.isObject()
  .withRequired('title', validator.isString())
  .withRequired('text', validator.isString())
  .withRequired('date', validator.isString())
  .withOptional('author', validator.isString())
