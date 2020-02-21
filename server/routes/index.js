const router = require('express').Router()
const roomRouter = require('./room')
const userRouter = require('./user')
const arenaRouter = require('./roomDetails')

router.use('/users', userRouter)
router.use('/rooms', roomRouter)
router.use('/arena', arenaRouter)

module.exports = router
