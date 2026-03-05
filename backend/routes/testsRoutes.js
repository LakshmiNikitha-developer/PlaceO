const express = require("express");
const router = express.Router();
const Test = require("../models/Test");

// GET /api/tests - Get all tests
router.get("/", async (req, res) => {
  try {
    const { category, subcategory, difficulty } = req.query;
    let filter = { isPublished: true };

    console.log("Query params:", { category, subcategory, difficulty });

    if (category) filter.category = category;
    if (subcategory) filter.subcategory = subcategory;

    console.log("Filter:", filter);

    // Include questions only when fetching a specific subcategory
    const selectFields = subcategory ? "" : "-questions";

    const tests = await Test.find(filter).select(selectFields);

    console.log(`Found ${tests.length} tests matching filter`);

    res.json({
      total: tests.length,
      tests,
    });
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/tests/:id - Get single test with questions
router.get("/:id", async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test || !test.isPublished) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.json(test);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/tests - Create new test (Admin only)
router.post("/", async (req, res) => {
  try {
    const {
      title,
      category,
      subcategory,
      duration,
      totalQuestions,
      questions,
      passingScore,
      description,
    } = req.body;

    if (!title || !category || !questions) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const test = await Test.create({
      title,
      category,
      subcategory,
      duration,
      totalQuestions: questions.length,
      questions,
      passingScore,
      description,
      isPublished: true,
    });

    res.status(201).json({
      message: "Test created successfully",
      test,
    });
  } catch (error) {
    console.error("Error creating test:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
