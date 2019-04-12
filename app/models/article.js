const Schema = require('mongoose').Schema

module.exports = new Schema({
  'title': String,
  'text': String,
  'date': Date,
  'author': String
}, {
  'collection': 'articles',
  'versionKey': false
})
