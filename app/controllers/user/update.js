// Core
const Schema = require('../../models/user.js')
const validator = require('node-validator')

const check = validator.isObject()
  .withRequired('name', validator.isString())

module.exports = class Update {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.UserModel = connect.model('User', Schema)
    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.put('/user/update/:id', validator.express(check), (req, res) => {
      var conditions = { _id: req.params.id }
      try {
        this.UserModel.Update(conditions, req.body).then(user => {
          res.status(200).json(user || {})
        }).catch(() => {
          res.status(200).json({})
        })
      } catch (e) {
        console.error(`[ERROR] user/update -> ${e}`)
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
