const express = require("express")
const postRoute = express.Router()
const controller = require('../controller/post.controller.js')
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()})
/**
 *  POST /api/posts
 *  req.body - caption image file , user
 * http://localhost:3000/api/post/
 */

postRoute.post('/', upload.single('image'), controller.createPostController)

module.exports = postRoute

