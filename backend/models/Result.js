const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    totalQuestions: Number,
    correctAnswers: Number,
    wrongAnswers: Number,
    skipped: Number,
    percentage: Number,
    isPassed: Boolean,
    timeTaken: Number, // in seconds
    answers: [
      {
        questionId: String,
        userAnswer: String,
        correctAnswer: String,
        isCorrect: Boolean,
      },
    ],
    strengths: [String],
    improvements: [String],
    feedback: String,
    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create index for user test performance
resultSchema.index({ userId: 1, testId: 1 });
resultSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model("Result", resultSchema);
