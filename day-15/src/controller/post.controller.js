const postModel = require("../models/post.model.js");
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")

const client = new ImageKit({
   privateKey:"private_2pr6gkSySPMdEaqNQcs+wnjVw1s="
});

async function createPostController(req, res) {
  console.log(req.body, req.file);
    const file = await client.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test"
    })
    res.send(file)
}



module.exports = {
  createPostController,
};
