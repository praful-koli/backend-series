const express = require('express')
const userRoute = express.Router()
const userController = require('../controller/user.controller.js')
const identifyUser = require('../middlewares/auth.middleware.js')


/** 
 * @route POST /api/user/follow:username
 * @description Follow a user
 * @access Private
 */

userRoute.post("/follow/:username", identifyUser , userController.followUserController)


/**
 * @route POST /api/user/unfollow/:username
 * @description unfolloing the user
 */

userRoute.delete('/unfollow/:username' , identifyUser , userController.unfollowUserController)



userRoute.get('/follower/request ', identifyUser, userController.getFollowRequestController)

userRoute.patch('/follower/request/:username', identifyUser , userController.acceptFollowRequestController)

module.exports = userRoute