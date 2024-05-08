const mongoose = require("mongoose");
require('dotenv').config();

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("MongoDB connected");
      });
  } catch (error) {
    res.status(400).json({
        message: "Not Connected",
    });
  }
};

conn();