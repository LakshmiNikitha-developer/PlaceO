// Seeding script to insert questions into database

const mongoose = require("mongoose");
require("dotenv").config();
const Test = require("../models/Test");
const quantitativeAptitudeQuestions = require("./quantitativeAptitude");

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("📊 Connected to MongoDB for seeding...");

    // Delete existing Quant test to avoid duplicates
    await Test.deleteOne({
      title: "Quantitative Aptitude - Core Concepts",
      category: "aptitude",
      subcategory: "quant"
    });

    // Create test document
    const quantTest = await Test.create({
      title: "Quantitative Aptitude - Core Concepts",
      category: "aptitude",
      subcategory: "quant",
      duration: 120,
      totalQuestions: quantitativeAptitudeQuestions.length,
      questions: quantitativeAptitudeQuestions,
      passingScore: 50,
      description: "Master fundamental quantitative aptitude concepts including ratio, percentage, time & work, and more.",
      isPublished: true
    });

    console.log(`✅ Successfully seeded ${quantitativeAptitudeQuestions.length} Quantitative Aptitude questions`);
    console.log(`📝 Test ID: ${quantTest._id}`);
    console.log(`📊 Test Title: ${quantTest.title}`);

    await mongoose.connection.close();
    console.log("✅ Database seeding completed and connection closed");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run seed if this file is executed directly
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
