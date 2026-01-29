const app = require("./src/app.js");
const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(
      "mongodb+srv://praful:e0KugbtRkn4XpqYB@cluster0.u3b01ha.mongodb.net/day-6",
    )
    .then(() => {
      console.log("Connected to Database");
    });
}

connectDB();

app.listen(3000, () => {
  console.log("Server is runing on prot 3000");
});
