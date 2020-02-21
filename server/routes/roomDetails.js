const arenaRouter = require('express').Router()
const arenaController = require('../controllers/roomDetails')

arenaRouter.post('/:roomid/:userid', arenaController.add)
arenaRouter.get('/:roomid/:userid', arenaController.findAll)
arenaRouter.put('/:roomid/:userid', arenaController.updateScore)

module.exports = arenaRouter
