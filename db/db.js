const mongoose = require("mongoose");

const connectDB = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log("database connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
