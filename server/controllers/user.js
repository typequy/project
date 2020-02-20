const {User} = require('../models')

class UserController {

  static register(req, res, next){
    let userData = {
      where: {
        name: req.body.name
      }
    }

    User.findOne(userData)
    .then(user => {
      if (user) {
        res.status(200).json({status: 'Member', user})
      } else {
        let data = {
          name: req.body.name
        }
        return User.create(data)
      }
    })
    .then(user => {
      res.status(201).json({status: 'New Member', user})
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = UserController