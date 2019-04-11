const CreateUser = require('./user/create.js')
const Show = require('./user/show.js')
const Search = require('./user/search.js')
const Update = require('./user/update.js')
const Destroy = require('./user/destroy.js')

const CreateArticle = require('./article/create.js')

module.exports = {
  user: {
    CreateUser,
    Show,
    Search,
    Update,
    Destroy
  },
  article: {
    CreateArticle
  }
}
