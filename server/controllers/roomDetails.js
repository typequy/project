const {RoomDetail} = require('../models')

class RoomDetailController {

  static add(req, res, next){
    let userId = {
      UserId: req.body.id,
      RoomId: req.params.id
    }

    RoomDetail.create(userId)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      next(err)
    })
  }

  static updateScore(req, res, next){
    let data = {
      where: {
        UserId: req.params.userid,
        RoomId: req.params.roomid
      }
    }

    RoomDetail.findOne(data)
    .then(result => {
      let updateData = {
        score: result.score + 10
      }

      return result.update(updateData)
    })
    .then(result => {
      res.status(200).json('Add 10 points')
    })
    .catch(err => {
      next(err)
    })

  }
  
}

module.exports = RoomDetailController