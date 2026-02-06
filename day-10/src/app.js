const express = require('express') // importing the express to create a sever
const authRouter = require('./routes/auth.routes.js')
const cookieParser = require('cookie-parser')

const app = express() // creating the servea

app.use(cookieParser())
app.use(express.json()) // we can read data in thr req.body

app.use("/api/auth" , authRouter)






module.exports = app