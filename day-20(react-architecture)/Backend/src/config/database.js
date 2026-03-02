const mongoose = require('mongoose')

function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URL)
        .then( () => {
            console.log("Database connected succesfully.")
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB