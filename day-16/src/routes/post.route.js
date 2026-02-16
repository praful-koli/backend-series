const express = require("express")
const postRoute = express.Router()
const controller = require('../controller/post.controller.js')
const multer = require("multer")
const postModel = require("../models/post.model.js")
const upload = multer({storage: multer.memoryStorage()})
/**
 *  POST /api/posts
 *  req.body - caption image file , user
 * http://localhost:3000/api/post/
 */

postRoute.post('/', upload.single('image'), controller.createPostController)


/**
 * GET
 *  /api/post/ ->protected
 * geting the specfics user post 
 */

postRoute.get('/',controller.getPostController)
 


postRoute.get('/detail/:postId',controller.getPostDetailsController) 





module.exports = postRoute

