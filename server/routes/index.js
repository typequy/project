const router = require('express').Router()
const roomRouter = require('./room')

router.use('/rooms', roomRouter)

module.exports = router
