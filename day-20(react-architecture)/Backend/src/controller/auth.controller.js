const userModel = require('../models/user.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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
    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username, email, password : hash, bio , profileImage
    })

    const token = jwt.sign(
        {
            id:user._id,
            username : user.username
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


    const passwordValid = await bcrypt.compare(password , user.password)

    if(!passwordValid) {
        return res.status(401).json({
            message : "Password invalid."
        })
    }

    const token = jwt.sign(
        {
        id:user._id,
        username : user.username
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


async function getUserInfoController(req,res) {
    const userId = req.user.id
    let userInfo = await userModel.find({_id :userId})
    userInfo = {...userInfo[0]._doc, password:'-'}
    res.status(200).json({
        message : 'Fetch user Info successfully',
        userInfo
    })
}

module.exports = {
    registerController,
    loginController,
    getUserInfoController
}
