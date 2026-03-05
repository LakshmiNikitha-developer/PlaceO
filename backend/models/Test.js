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
      enum: [
        "quant",
        "verbal",
        "reasoning",
        "logical",
        "probability",
        // interview companies
        "amazon",
        "google",
        "microsoft",
        "zoho",
        "tcs",
        "infosys",
        "wipro",
        "accenture",
        "cognizant",
        "capgemini",
        "deloitte",
        // coding topics
        "java",
        "python",
        "c",
        "dsa",
        "algorithms",
        "competitive",
        // interview languages/topics
        "python-interview",
        "html-interview",
        "ds-interview",
        "react-interview",
        "node-interview",
        "angular-interview",
        "sql-interview",
      ],
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
        options: [String], // For MCQ
        correctAnswer: String, // For MCQ
        answer: String, // For Q&A (interview format)
        explanation: String,
        difficulty: {
          type: String,
          enum: ["easy", "medium", "hard"],
        },
        topic: String,
        category: String,
        subcategory: String,
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
