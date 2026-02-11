const userModel = require('../models/user.model.js')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
async function registerController(req, res) {
    const {username , email , password , bio , profileImage} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {
                username:username
            },
            {
                email:email
            }
        ]
    })
    if(isUserAlreadyExists) {
        return res.status(409).json({
            message : "User already exsits," + (isUserAlreadyExists.email == email ? "User with this email alread exists." : "Use with this username alread exsits.")
        })
    }
    const hash = crypto.createHash('md5').update(password).digest('hex')
    const user = await userModel.create({
        username, email, password : hash, bio , profileImage
    })

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,{expiresIn:'1d'}
    )
    
    res.cookie('token', token)
    const userRespone = {...user._doc , password:"_"}
    res.status(200).json({
        message : 'User register successfully.',
        userRespone
    })
}

async function loginController(req, res) {
    const {username , email , password } = req.body
    const user = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(!user) {
        return res.status(404).json({
            message: "User Not found."
        })
    }


    const hash = crypto.createHash('md5').update(password).digest('hex')

    const passwordValid = user.password == hash

    if(!passwordValid) {
        return res.status(401).json({
            message : "Password invalid."
        })
    }

    const token = jwt.sign(
        {
        id:user._id
    },
    process.env.JWT_SECRET,{expiresIn:'1d'}
   )
   res.cookie('token', token)
   
   const userData = {...user._doc , password:"-"}
   res.status(200).json({
      message:'User login successfully.',
      userData
   })
}


module.exports = {
    registerController,
    loginController
}
