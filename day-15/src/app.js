const express = require('express')
const app = express()
const cookieParse = require('cookie-parser')

const authRoute = require('./routes/auth.route.js')
const postRoute = require('./routes/post.route.js')

app.use(cookieParse())
app.use(express.json())

app.use('/api/auth' , authRoute)
app.use('/api/post' , postRoute)

module.exports = app