const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isUserAlredayExists = await userModel.findOne({ email });
  if (isUserAlredayExists) {
    return res
      .status(400)
      .json({ message: " user is alread exists with this eamil addres" });
  }

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
   
  res.cookie('jwt_token' , token)

  res.status(201).json({
    message: "user created",
    user,
    token,
  });
});

module.exports = authRouter;
