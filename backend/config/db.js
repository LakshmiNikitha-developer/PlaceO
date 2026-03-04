const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://PlaceO:8xSMFwcD7qF5lBnJ@placeo.2jgd051.mongodb.net/PlaceO"
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
