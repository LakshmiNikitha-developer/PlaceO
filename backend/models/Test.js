const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  title: String,
  questions: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Test", testSchema);
