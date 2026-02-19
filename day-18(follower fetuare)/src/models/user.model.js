const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {
    username: {
        type : String,
        unique : [true , "User name already exisits"],
        require : [true , "user name is requrie"]
    },
    email : {
        type : String,
        unique : [true, "Email already exisits."],
        require : [true , 'Email is require.']
    },
    password : {
        type : String,
        require : [true , 'Password is required.']
    },
    bio : String,
    profileImage : {
        type : String,
        default : "https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp",
    }
})



const userModel = mongoose.model('users' , userSchema)

module.exports = userModel