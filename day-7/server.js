/**
 *   server.js
 *   1. Runing the server 
 *   2. connect to the database
 */
require('dotenv').config()
const app = require('./src/app.js')
const connectDB = require('./src/config/database.js')

connectDB()
app.listen(3000 , () => {
    console.log('Server is runing on the port 3000');
})