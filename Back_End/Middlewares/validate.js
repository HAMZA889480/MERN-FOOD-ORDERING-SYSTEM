const express = require("express");
const { body, validationResult } = require("express-validator");

const handleValidationErrors = async (req, res, next) => {
  //checking if there are any errors in the request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    console.log(req.body);
    return res.status(400).json({ errors: errors.array() });
  }

  //if there are no errors, the next middleware is called
  next();
};

//validating the request body
const validateUserRequest = [
  body("name").isString().notEmpty().withMessage("Name is Required"),
  body("phone").isString().notEmpty().withMessage("Phone number is Required"),
  body("city").isString().notEmpty().withMessage("City is Required"),
  body("address").isString().notEmpty().withMessage("Address is Required"),

  //calling the handleValidationErrors function to check if there are any errors
  handleValidationErrors,
];

module.exports = validateUserRequest;
