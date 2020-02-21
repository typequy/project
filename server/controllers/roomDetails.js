const {RoomDetail,User} = require('../models')

class RoomDetailController {

  static add(req, res, next){
    let userId = {
      UserId: req.params.userid,
      RoomId: req.params.roomid
    }
    RoomDetail
      .findOne({
        where:userId
      })
      .then(res=>{
        if(res){
          return res
        }else{
          return RoomDetail.create(userId)
        }
      })
      .then(result => {
        return RoomDetail
        .findAll({
          include:[{
            model:User
          }],
          where:{
            RoomId: req.params.roomid
          }
        })
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        next(err)
      })
  }


  static findAll(req, res, next){
    let userId = {
      RoomId: req.params.roomid
    }
    let self = null
    RoomDetail
      .findOne({
        where:{
          UserId: req.params.userid,
          RoomId: req.params.roomid
        }
      })
      .then(res => {
        self = res
        return RoomDetail
                .findAll({
                  include:[{
                    model:User
                  }],
                  where:userId
                })
      })
      .then(result => {
        res.status(200).json({result,self})
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
      const nsp = req.io.of(`/${req.params.roomid}`);
      nsp.in(req.params.roomid).emit('connectToRoom', 'update');
      res.status(200).json('Add 10 points')
    })
    .catch(err => {
      next(err)
    })

  }
  
}

module.exports = RoomDetailController