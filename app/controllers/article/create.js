// Dependencies
const Schema = require('../../models/article.js')
const validator = require('node-validator')
const check = require('./payload-validator/create.js')

module.exports = class CreateArticle {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.check = check
    this.UserModel = connect.model('Article', Schema)

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.post('/article/create', validator.express(this.check), (req, res) => {
      try {
        const userModel = new this.UserModel(req.body)

        userModel.save().then(user => {
          res.status(200).json(user || {})
        }).catch(() => {
          res.status(200).json({})
        })
      } catch (e) {
        console.error(`[ERROR] article/create -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}
