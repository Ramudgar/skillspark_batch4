const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

// Connect to MongoDB
const connectDB = require("./src/config/db");
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
