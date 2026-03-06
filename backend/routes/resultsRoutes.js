const express = require("express");
const router = express.Router();
const Result = require("../models/Result");
const User = require("../models/User");

// POST /api/results - Submit test result
router.post("/", async (req, res) => {
  try {
    const { userId, testId, score, answers, timeTaken } = req.body;

    if (!userId || !testId || score === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Calculate statistics
    const totalQuestions = answers.length;
    const correctAnswers = answers.filter((a) => a.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const isPassed = percentage >= 50;

    // Create result
    const result = await Result.create({
      userId,
      testId,
      score,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      skipped: 0,
      percentage: Math.round(percentage),
      isPassed,
      timeTaken,
      answers,
    });

    // Update user stats
    await User.findByIdAndUpdate(userId, {
      $inc: { testsAttempted: 1 },
      $max: { bestScore: score },
    });

    res.status(201).json({
      message: "Result saved successfully",
      result,
    });
  } catch (error) {
    console.error("Error saving result:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/results/:userId - Get user's results
router.get("/user/:userId", async (req, res) => {
  try {
    const results = await Result.find({ userId: req.params.userId })
      .populate("testId", "title category")
      .sort({ createdAt: -1 });

    if (!results.length) {
      return res.status(404).json({ message: "No results found" });
    }

    res.json({
      total: results.length,
      results,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/results/:userId/:testId - Get specific result
router.get("/:userId/:testId", async (req, res) => {
  try {
    const result = await Result.findOne({
      userId: req.params.userId,
      testId: req.params.testId,
    }).populate("testId", "title category");

    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/results/stats/:userId - Get user statistics
router.get("/stats/:userId", async (req, res) => {
  try {
    const results = await Result.find({ userId: req.params.userId });

    if (!results.length) {
      return res.json({
        testsAttempted: 0,
        averageScore: 0,
        passRate: 0,
      });
    }

    const averageScore =
      results.reduce((sum, r) => sum + r.score, 0) / results.length;
    const passedTests = results.filter((r) => r.isPassed).length;
    const passRate = (passedTests / results.length) * 100;

    res.json({
      testsAttempted: results.length,
      averageScore: Math.round(averageScore),
      passRate: Math.round(passRate),
      totalScore: results.reduce((sum, r) => sum + r.score, 0),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
