const mongoose = require("mongoose");

const chatHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    chatType: {
      type: String,
      enum: ["dashboard", "mock-interview"]
    },
    messages: [
      {
        role: String,
        content: String,
        timestamp: Date
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatHistory", chatHistorySchema);
