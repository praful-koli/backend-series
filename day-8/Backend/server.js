const app  = require('./src/app.js')
const connectDB = require('./src/config/database.js')
require('dotenv').config()
connectDB()

app.listen(3000, (req ,res) => {
    console.log('server is running on the port 3000');
})