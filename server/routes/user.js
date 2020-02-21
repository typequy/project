const userRouter = require('express').Router()
const userController = require('../controllers/user')

userRouter.post('/', userController.register)

module.exports = userRouter
