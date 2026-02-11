const express = require("express");
const authRoute = express.Router();
const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const authContorller = require("../controller/auth.controller.js");

authRoute.post("/register", authContorller.registerController);

authRoute.post("/login", authContorller.loginController);

module.exports = authRoute;
