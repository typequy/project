const roomRouter = require('express').Router()
const roomControllers = require('../controllers/room')

roomRouter.get('/', roomControllers.list)
roomRouter.get('/:id', roomControllers.getById)
roomRouter.post('/', roomControllers.add)
roomRouter.put('/:id', roomControllers.update)
roomRouter.put('/closed/:id', roomControllers.updateStatus)
roomRouter.delete('/:id', roomControllers.delete)

module.exports = roomRouter
