
const express = require('express')
const authRoute = express.Router()
const userModel = require('../models/user.model.js')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


async function registerController(req, res)  {
    const {name , email , password} = req.body

    const isUserAlreadyExsits =  await userModel.findOne({email})
    if(isUserAlreadyExsits) {
        return res.status(409).json({
            message : 'user already exsits with this email id'
        })
    }
    
    const hash = crypto.createHash("md5").update(password).digest('hex')


    const user = await userModel.create({
        name : name,
        email : email,
        password : hash
    })
    
    const token = jwt.sign(
        {
           id : user._id
        },
        process.env.JWT_SECRET,{expiresIn:"1d"}
    )
    
     res.cookie('token' , token)

     res.status(200).json({
        message : 'register user successful',
        name : user.name,
        email : user.email
     })

}


async function loginController(req, res ) {
      const {name , email , password} = req.body
     
      const user = await userModel.findOne({
        $or:[
            {
                name : name

            },
            {
                email : email
                
            }
        ]
      })
       
      if(!user) {
        return res.status(404).json({
            message : "user not found."
        })
      }
       
      const hash = crypto.createHash("md5").update(password).digest('hex')

      const isPasswordValid = user.password === hash

      if(!isPasswordValid) {
         res.status(401).json({
            message : 'password invalid'
         })
      }

      const token = jwt.sign(
        {
            id : user._id
        },
        process.env.JWT_SECRET,{expiresIn:"1d"}
    )

    res.cookie('token',token)

    res.status(200).json({
        message : "Login successfully .",
        name : user.name,
        email : user.email
    })
}


module.exports = {registerController , loginController}