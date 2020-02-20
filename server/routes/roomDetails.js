const arenaRouter = require('express').Router()
const arenaController = require('../controllers/roomDetails')

arenaRouter.post('/:id', arenaController.add)
arenaRouter.put('/:roomid/:userid', arenaController.updateScore)

module.exports = arenaRouter
