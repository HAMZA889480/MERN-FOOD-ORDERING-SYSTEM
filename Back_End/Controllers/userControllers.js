const User = require("../Models/userModel");
const express = require("express");

exports.CreateUser = async (req, res) => {
  //1. Check if the user already exists.
  //2. If the user does not exist, create a new user.
  //3. Return the user's information.

  try {
    //1. Check if the user already exists.
    const user = await User.findOne({ auth0_id: req.body.auth0_id });

    //yes than return the user's information
    if (user) {
      res.status(200).json({ message: "User already exists!" });
      return;
    }

    //2. If the user does not exist, create a new user.
    const newUser = await User.create(req.body);

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "User is not created! " });
  }
};

exports.UpdateUser = async (req, res) => {
  //1. Find the user by the token.

  try {
    //getting the form data
    const { name, address, phone, city } = req.body;

    //1. Find the user by the token.
    //userId is attached to the request object by the parseJWT middleware
    const user = await User.findById(req.userId);

    //If the user is not found, return not found
    if (!user) {
      res.status(404).json({ message: "User not found!" });
      return;
    }

    //Update the user's information
    user.name = name;
    user.address = address;
    user.phone = phone;
    user.city = city;

    //Save the user's information
    const updtedUser = await user.save();

    res.status(200).json({ message: "User is updated!", updtedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "User is not updated!" });
  }
};

exports.GetUser = async (req, res) => {
  //1. Find the user by the token
  try {
    //1. Find the user by the token
    //userId is attached to the request object by the parseJWT middleware
    const user = await User.findById(req.userId);

    //If the user is not found, return not found
    if (!user) {
      res.status(404).json({ message: "User not found!" });
      return;
    }

    res.status(200).json({ message: "User found!", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "User cannot be searched!" });
  }
};
