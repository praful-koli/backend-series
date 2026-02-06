const mongoose = require("mongoose");

function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("Database connected successfuly");
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB
