const { auth } = require("express-oauth2-jwt-bearer");
const env = require("dotenv");
const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../Models/userModel");

// Load environment variables
env.config({ path: "./config.env" });

// Middleware to check if the user is authenticated
exports.jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

exports.parseJWT = async (req, res, next) => {
  // Check if the request has the authorization header
  //place space after Bearer
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    //console.log("Provide a valid token");
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  // Extract the token from the authorization header
  //Bearer 151518181. Spliting the token from the Bearer. The token is the second element in the array.
  const token = req.headers.authorization.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.decode(token);

    const auth0_id = decoded.sub;

    //Search for the user in the database
    const user = await User.findOne({ auth0_id });

    //If the user is not found, return unauthorized
    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    //Attach user id to the request object
    req.userId = user._id.toString(); //user mongoose id
    req.userAuthId = user.auth0_id; //user auth0 id

    //Continue to the next middleware
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};
