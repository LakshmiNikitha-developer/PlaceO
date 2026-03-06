const mongoose = require("mongoose");

const chatHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
    },
    chatType: {
      type: String,
      enum: ["dashboard", "mock-interview", "doubt-solving"],
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    messages: [
      {
        role: {
          type: String,
          enum: ["user", "assistant"],
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    isResolved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create index for faster queries
chatHistorySchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model("ChatHistory", chatHistorySchema);
