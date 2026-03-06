const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Test title is required"],
      trim: true,
    },
    category: {
      type: String,
      enum: ["aptitude", "coding", "interview"],
      required: true,
    },
    subcategory: {
      type: String,
      enum: ["quant", "verbal", "reasoning", "logical", "probability", "amazon", "google", "tcs", "deloitte"],
    },
    duration: {
      type: Number,
      required: true,
      default: 60, // in minutes
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    questions: [
      {
        questionText: String,
        options: [String],
        correctAnswer: String,
        explanation: String,
        difficulty: {
          type: String,
          enum: ["easy", "medium", "hard"],
        },
      },
    ],
    passingScore: {
      type: Number,
      default: 50,
    },
    description: String,
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", testSchema);
