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

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder:"cohort-2-insta-clone-posts"
  });
  
  let decoded = null;
  try {
       decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message : "User Not Authorized!."
    })
  }
  

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

module.exports = {
  createPostController,
};
