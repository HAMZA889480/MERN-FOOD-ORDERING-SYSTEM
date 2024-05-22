const app = require("./app");
const env = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables
env.config({ path: "./config.env" });

// Connect to MongoDB
mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

// Path: Back_End/server.js
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
