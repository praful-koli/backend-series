const express = require("express")
const postRoute = express.Router()
const controller = require('../controller/post.controller.js')
const multer = require("multer")

const upload = multer({storage: multer.memoryStorage()})
const identifyUser = require('../middlewares/auth.middleware.js')
/**
 *  @route POST /api/posts
 *  req.body - caption image file , user
 * http://localhost:3000/api/post/
 */

postRoute.post('/', identifyUser ,upload.single('image'), controller.createPostController)


/**
 * GET
 * @route /api/post/ ->protected
 * @description geting the specfics user post 
 */

postRoute.get('/',identifyUser,controller.getPostController)
 

/**
 * @route /api/post/detail/postId
 * @description make a request for the spcifces post in details
 */
postRoute.get('/detail/:postId',identifyUser,controller.getPostDetailsController) 



/**
 * @route /api/post/like/:postId 
 * @description make a feature the like a post 
 * 
 */

postRoute.post('/like/:postId' , identifyUser , controller.likePostController)


module.exports = postRoute

