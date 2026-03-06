const mongoose = require("mongoose");

const testResultSchema = new mongoose.Schema({
  userId: String,
  template: String,
  score: Number,
  total: Number,
  correct: Number,
  wrong: Number,
  skipped: Number,
  accuracy: Number,
  timeTaken: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TestResult", testResultSchema);