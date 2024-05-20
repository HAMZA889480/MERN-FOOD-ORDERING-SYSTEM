const express = require("express");
const Router = express.Router();
const User = require("../Controllers/userControllers");
const { jwtCheck, parseJWT } = require("../Middlewares/Auth");
const inputValidation = require("../Middlewares/validate");

// Route to create a new user. This route is protected by the jwtCheck middleware
Router.post("/", jwtCheck, User.CreateUser)
  .put("/", jwtCheck, parseJWT, inputValidation, User.UpdateUser)
  .get("/", jwtCheck, parseJWT, User.GetUser);

module.exports = Router;
