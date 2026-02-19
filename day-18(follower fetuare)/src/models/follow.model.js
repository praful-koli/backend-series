const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    fllower: {
      ref: "user",
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "follower is reuired"],
    },

    fllowee: {
      ref: "user",
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "follower is reuired"],
    },
  },
  {
    timestamps: true,
  },
);



const followModel = mongoose.model("follows" , followSchema)


module.exports = followModel