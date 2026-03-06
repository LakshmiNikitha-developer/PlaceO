const express = require("express");
const router = express.Router();
const TestResult = require("../models/TestResult");

// SAVE RESULT
router.post("/submit", async (req, res) => {
  try {
    const newResult = new TestResult(req.body);
    await newResult.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET LATEST RESULT
router.get("/latest/:userId", async (req, res) => {
  const result = await TestResult.findOne({ userId: req.params.userId })
    .sort({ createdAt: -1 });

  res.json(result);
});

module.exports = router;