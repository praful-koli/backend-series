const postModel = require("../models/post.model.js");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const client = new ImageKit({
  privateKey: "private_2pr6gkSySPMdEaqNQcs+wnjVw1s=",
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token;
  if(!token) {
    return res.status(401).json({
      message:"Token not provided ,Unauthorized access"
    })
  }
  let decoded = null;
  
  try {
       decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message : "User Not Authorized!."
    })
  }

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder:"cohort-2-insta-clone-posts"
  });
  
  
  

  const post = await postModel.create({
    caption : req.body.caption,
    imgUrl : file.url,
    user:decoded.id
  })

  res.status(201).json({
    message : "Post created successfully.",
    post
  })

}



async function getPostController(req ,res) {
   const token = req.cookies.token

   if(!token) {
     return res.status(401).json(
      { message :"Unauthorized access"}
     )
   }
   let decoded = null

   try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
   } catch (error) {
       res.status(401).json({
          message : 'tooken invalid'
       })
   }


   const post = await postModel.find({
      user:decoded.id
   })


   res.status(200).json({
      message : "Fetched post successfully.",
      post
   })
}


async function getPostDetailsController(req, res) {
  const token = req.cookies.token
  if(!token) {
    res.status(401).json({
       message : "Unauthorized access"
    })
  }

  let decoded = null

   try {                         
     decoded = jwt.verify(token , process.env.JWT_SECRET)
   } catch (error) {
       res.status(401).json({
          message : 'tooken invalid'
       })
   }



   const {postId} = req.params
   console.log("post Id : ", postId)
   const post = await postModel.findById(postId)
   console.log("post: ", post)
   const userId = decoded.id
  
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

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController
  
};
