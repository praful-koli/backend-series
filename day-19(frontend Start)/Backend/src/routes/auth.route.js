const express = require('express')
const authRoute = express.Router()
const controller = require('../controller/auth.controller.js')
const identifyUser = require('../middlewares/auth.middleware.js')
authRoute.post('/register' , controller.registerController )

authRoute.post('/login', controller.loginController)


/**
 * @route /api/auth/get-me
 * @description get user  info 
 * @access private
 */
 authRoute.get('/get-me',identifyUser , controller.getUserInfoController)

module.exports = authRoute