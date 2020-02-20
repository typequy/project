const roomRouter = require('express').Router()
const roomControllers = require('../controllers/room')

roomRouter.get('/', roomControllers.list)
roomRouter.post('/', roomControllers.add)
roomRouter.put('/:id', roomControllers.update)
roomRouter.delete('/:id', roomControllers.delete)

module.exports = roomRouter
