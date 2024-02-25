const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
