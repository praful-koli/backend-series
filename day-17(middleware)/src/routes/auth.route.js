const express = require('express')
const authRoute = express.Router()
const controller = require('../controller/auth.controller.js')

authRoute.post('/register' , controller.registerController )
authRoute.post('/login', controller.loginController)


module.exports = authRoute