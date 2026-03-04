const express = require("express");
const router = express.Router();
const seedDatabase = require("../seedData/seed");

// POST /api/seed/questions - Load all questions
router.post("/questions", async (req, res) => {
  try {
    console.log("🌱 Starting database seed...");
    await seedDatabase();
    res.json({
      message: "✅ Database seeded successfully with Quantitative Aptitude questions",
      status: "success"
    });
  } catch (error) {
    console.error("❌ Seeding error:", error);
    res.status(500).json({
      message: "Error seeding database",
      error: error.message
    });
  }
});

module.exports = router;
