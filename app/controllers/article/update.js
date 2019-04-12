// Core
const Schema = require('../../models/article.js')
const validator = require('node-validator')
const check = require('./payload-validator/create.js')

module.exports = class UpdateArticle {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.check = check
    this.ArticleModel = connect.model('Article', Schema)
    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.put('/article/update/:id', validator.express(this.check), (req, res) => {
      var conditions = { _id: req.params.id }
      try {
        this.ArticleModel.update(conditions, req.body).then(article => {
          res.status(200).json(article || {})
        }).catch(() => {
          res.status(200).json({})
        })
      } catch (e) {
        console.error(`[ERROR] article/update -> ${e}`)
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
