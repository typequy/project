const {Room} = require('../models')

class RoomController {

  static list(req, res, next){
    Room.findAll({
      where:{
        status:'Open'
      }
    })
    .then(room => {
      res.status(200).json(room)
    })
    .catch(err => {
      next(err)
    })
  }

  static getById(req, res, next){
    Room.findByPk(req.params.id)
    .then(room => {
      res.status(200).json(room)
    })
    .catch(err => {
      next(err)
    })
  }

  static add(req, res, next){
    let roomData = {
      name: req.body.name
    }

    Room.create(roomData)
    .then(room => {
      req.io.emit('rooms')
      const nsp = req.io.of(`/${room.id}`);
      nsp.on('connection', function(socket){
        socket.join(room.id);
        nsp.in(room.id).emit('connectToRoom', 'roster');
      });
      res.status(201).json(room)
    })
    .catch(err => {
      next(err)
    })
  }

  static updateStatus(req, res, next){
    let roomId = {
      where: {
        id: req.params.id
      }
    }
    
    let roomData = {
      status: 'Closed'
    }
    

    Room.update(roomData, roomId)
    .then(result => {
      res.status(200).json(roomData)
    })
    .catch(err => {
      next(err)
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
    

    Room.update(roomData, roomId)
    .then(result => {
      res.status(200).json(roomData)
    })
    .catch(err => {
      next(err)
    })
  }

  static delete(req, res, next){
    let roomId = {
      where: {
        id: req.params.id
      }
    }

    Room.destroy(roomId)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      next(err)
    })
  }

}

module.exports = RoomController