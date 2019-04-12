const CreateUser = require('./user/create.js')
const ShowUser = require('./user/show.js')
const Search = require('./user/search.js')
const UpdateUser = require('./user/update.js')
const Destroy = require('./user/destroy.js')

const CreateArticle = require('./article/create.js')
const ShowArticle = require('./article/show.js')
const UpdateArticle = require('./article/update.js')
module.exports = {
  user: {
    CreateUser,
    ShowUser,
    Search,
    UpdateUser,
    Destroy
  },
  article: {
    CreateArticle,
    ShowArticle,
    UpdateArticle
  }
}
