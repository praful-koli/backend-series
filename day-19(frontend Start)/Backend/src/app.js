const express = require('express')
const app = express()
const cookieParse = require('cookie-parser')
const cors = require('cors')


/** Middelware */
app.use(cookieParse()) 
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

/** require route */
const authRoute = require('./routes/auth.route.js')
const postRoute = require('./routes/post.route.js')
const userRoute = require('./routes/user.route.js')


app.use('/api/auth' , authRoute)
app.use('/api/post' , postRoute)
app.use("/api/user" , userRoute)

module.exports = app