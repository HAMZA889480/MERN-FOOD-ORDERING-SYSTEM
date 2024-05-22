const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("./Routes/userRouter");
// Create an express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Routes
app.use("/api/users", userRoutes);

//Error handling middleware
app.use("*", (req, res, next) => {
  res.status(404).json({ message: "Route is not defined" });
  next();
});

//exporting the app
module.exports = app;
