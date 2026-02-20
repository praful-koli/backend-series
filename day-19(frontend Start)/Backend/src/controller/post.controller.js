const postModel = require("../models/post.model.js");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/likes.model.js");

const client = new ImageKit({
  privateKey: "private_2pr6gkSySPMdEaqNQcs+wnjVw1s=",
});

async function  createPostController(req, res) {
  console.log(req.body, req.file);

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder:"cohort-2-insta-clone-posts"
  });
  
  
  
  const userId = req.user.id
  const post = await postModel.create({
    caption : req.body.caption,
    imgUrl : file.url,
    user:userId
  })

  res.status(201).json({
    message : "Post created successfully.",
    post
  })

}



async function getPostController(req ,res) {
   
   const userId = req.user.id
   
   const post = await postModel.find({
      user:userId
   })


   res.status(200).json({
      message : "Fetched post successfully.",
      post
   })
}


async function getPostDetailsController(req, res) {
  
   const userId = req.user.id
   const {postId} = req.params
   const post = await postModel.findById(postId)

  
   const isValidUser  = post.user.toString() === userId

   if(!isValidUser) {
     return res.status(403).json({
       message : "Forbidden content"
     })
   }

   res.status(200).json({
     message : "fetch detail post successfully.",
     post
   })

}




async function likePostController(req, res) {
    const username = req.user.username 
    const postId = req.params.postId

    const post = await postModel.findById(postId)
    if(!post) {
       return res.status(404).json({
          message:"Post Not Found"
       })
    }

    const likePostRecored = await likeModel.create({
       post : postId,
       username : username
    })


    res.status(200).json({
       message : "Post like sucessfully",
       likePostRecored
    })
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController
  
};
