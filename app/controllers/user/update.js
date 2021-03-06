// Core
const Schema = require('../../models/user.js')
const validator = require('node-validator')
const check = require('./payload-validator/create.js')

module.exports = class UpdateUser {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.check = check
    this.UserModel = connect.model('User', Schema)
    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.put('/user/update/:id', validator.express(this.check), (req, res) => {
      var conditions = { _id: req.params.id }
      try {
        this.UserModel.update(conditions, req.body).then(user => {
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
