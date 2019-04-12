const CreateUser = require('./user/create.js')
const ShowUser = require('./user/show.js')
const Search = require('./user/search.js')
const Update = require('./user/update.js')
const Destroy = require('./user/destroy.js')

const CreateArticle = require('./article/create.js')
const ShowArticle = require('./article/show.js')
module.exports = {
  user: {
    CreateUser,
    ShowUser,
    Search,
    Update,
    Destroy
  },
  article: {
    CreateArticle,
    ShowArticle
  }
}
