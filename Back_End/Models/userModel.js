const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  auth0_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
