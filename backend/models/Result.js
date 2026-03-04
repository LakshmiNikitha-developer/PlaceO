const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  score: Number,
  strengths: [String],
  improvements: [String]
});

module.exports = mongoose.model("Result", resultSchema);
