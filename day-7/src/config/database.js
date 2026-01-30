const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then(() => {
      console.log("Database connect successfuly");
    });
}


module.exports = connectDB