const express = require('express')
const app = express()
const authRoute = require('./routes/auth.route.js')
const cookieParse = require('cookie-parser')

app.use(cookieParse())
app.use(express.json())

app.use('/api/auth' , authRoute)

module.exports = app