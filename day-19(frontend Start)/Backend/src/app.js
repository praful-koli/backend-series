const express = require('express')
const app = express()
const cookieParse = require('cookie-parser')



/** Middelware */
app.use(cookieParse()) 
app.use(express.json())

/** require route */
const authRoute = require('./routes/auth.route.js')
const postRoute = require('./routes/post.route.js')
const userRoute = require('./routes/user.route.js')


app.use('/api/auth' , authRoute)
app.use('/api/post' , postRoute)
app.use("/api/user" , userRoute)

module.exports = app