require('dotenv').config()
const app = require('./src/app.js') //require the app 
const connectDB = require('./src/config/database.js')
connectDB()
app.listen(3000, ()=> {  
    console.log("Sever is running on port 3000")
})