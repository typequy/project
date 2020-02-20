const {Room} = require('../models')

class RoomController {

  static list(req, res, next){
    Room.findAll()
    .then(room => {

    })
    .catch(err => {

    })
  }

  static add(req, res, next){
    let roomData = {
      name: req.body.name
    }

    Room.create(roomData)
    .then(room => {

    })
    .catch(err => {

    })
  }

  static update(req, res, next){
    let roomId = {
      where: {
        id: req.params.id
      }
    }
    
    let roomData = {
      name: req.body.name
    }
  }

  static delete(req, res, next){

  }

}

module.exports = RoomController