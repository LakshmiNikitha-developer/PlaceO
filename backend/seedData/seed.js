// Seeding script to insert questions into database

const mongoose = require("mongoose");
require("dotenv").config();
const Test = require("../models/Test");
// aptitude data sets
const quantitativeAptitudeQuestions = require("./quantitativeAptitude");
const verbalAptitudeQuestions = require("./verbalAptitude");
const logicalAptitudeQuestions = require("./logicalAptitude");
const probabilityAptitudeQuestions = require("./probabilityAptitude");
const reasoningAptitudeQuestions = require("./reasoningAptitude");

// coding data sets
const javaCodingQuestions = require("./codingJava");
const pythonCodingQuestions = require("./codingPython");
const cCodingQuestions = require("./codingC");
const dsaQuestions = require("./codingDsa");
const algoQuestions = require("./codingAlgorithms");
const competitiveQuestions = require("./codingCompetitive");

// interview data sets
const zohoQuestions = require("./interviewZoho");
const googleQuestions = require("./interviewGoogle");
const microsoftQuestions = require("./interviewMicrosoft");
const amazonQuestions = require("./interviewAmazon");
const tcsQuestions = require("./interviewTCS");
const infosysQuestions = require("./interviewInfosys");
const wiproQuestions = require("./interviewWipro");
const accentureQuestions = require("./interviewAccenture");
const cognizantQuestions = require("./interviewCognizant");
const capgeminiQuestions = require("./interviewCapgemini");

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("📊 Connected to MongoDB for seeding...");

    // helper to create or replace a test
    // `cat` default is 'aptitude'; pass 'coding' when seeding coding tests
    const createOrReplace = async (title, cat, subcat, questions) => {
      await Test.deleteOne({ title, category: cat, subcategory: subcat });
      const test = await Test.create({
        title,
        category: cat,
        subcategory: subcat,
        duration: 60,
        totalQuestions: questions.length,
        questions,
        passingScore: 50,
        description: `Practice questions for ${subcat}`,
        isPublished: true
      });
      console.log(`📝 seeded ${questions.length} questions for ${cat}/${subcat}`);
      return test;
    };

    // helper to create interview Q&A tests
    const createInterviewTest = async (title, company, subcat, questions) => {
      // Transform interview Q&A format to match Test model
      const formattedQuestions = questions.map(q => ({
        questionText: q.question,
        answer: q.answer,
        category: "interview",
        subcategory: subcat,
        topic: q.topic
      }));

      await Test.deleteOne({ title, category: "interview", subcategory: subcat });
      const test = await Test.create({
        title,
        category: "interview",
        subcategory: subcat,
        duration: 60,
        totalQuestions: formattedQuestions.length,
        questions: formattedQuestions,
        passingScore: 50,
        description: `Interview preparation questions for ${company}`,
        isPublished: true
      });
      console.log(`📝 seeded ${formattedQuestions.length} interview questions for interview/${subcat}`);
      return test;
    };

    // aptitude tests
    const quantTest = await createOrReplace(
      "Quantitative Aptitude - Core Concepts",
      "aptitude",
      "quant",
      quantitativeAptitudeQuestions
    );
    const verbalTest = await createOrReplace(
      "Verbal Ability Basics",
      "aptitude",
      "verbal",
      verbalAptitudeQuestions
    );
    const logicalTest = await createOrReplace(
      "Logical Reasoning Basics",
      "aptitude",
      "logical",
      logicalAptitudeQuestions
    );
    const probTest = await createOrReplace(
      "Probability Fundamentals",
      "aptitude",
      "probability",
      probabilityAptitudeQuestions
    );
    const reasonTest = await createOrReplace(
      "Reasoning Patterns",
      "aptitude",
      "reasoning",
      reasoningAptitudeQuestions
    );

    // coding tests
    const javaTest = await createOrReplace(
      "Java Programming Fundamentals",
      "coding",
      "java",
      javaCodingQuestions
    );
    const pythonTest = await createOrReplace(
      "Python Basics",
      "coding",
      "python",
      pythonCodingQuestions
    );
    const cTest = await createOrReplace(
      "C Language Essentials",
      "coding",
      "c",
      cCodingQuestions
    );
    const dsaTest = await createOrReplace(
      "Data Structures Overview",
      "coding",
      "dsa",
      dsaQuestions
    );
    const algoTest = await createOrReplace(
      "Algorithmic Thinking",
      "coding",
      "algorithms",
      algoQuestions
    );
    const compTest = await createOrReplace(
      "Competitive Coding Tips",
      "coding",
      "competitive",
      competitiveQuestions
    );

    // interview tests
    const zohoTest = await createInterviewTest(
      "Zoho Interview Questions",
      "Zoho",
      "zoho",
      zohoQuestions
    );
    const googleTest = await createInterviewTest(
      "Google Interview Questions",
      "Google",
      "google",
      googleQuestions
    );
    const microsoftTest = await createInterviewTest(
      "Microsoft Interview Questions",
      "Microsoft",
      "microsoft",
      microsoftQuestions
    );
    const amazonTest = await createInterviewTest(
      "Amazon Interview Questions",
      "Amazon",
      "amazon",
      amazonQuestions
    );
    const tcsTest = await createInterviewTest(
      "TCS Interview Questions",
      "TCS",
      "tcs",
      tcsQuestions
    );
    const infosysTest = await createInterviewTest(
      "Infosys Interview Questions",
      "Infosys",
      "infosys",
      infosysQuestions
    );
    const wiproTest = await createInterviewTest(
      "Wipro Interview Questions",
      "Wipro",
      "wipro",
      wiproQuestions
    );
    const accentureTest = await createInterviewTest(
      "Accenture Interview Questions",
      "Accenture",
      "accenture",
      accentureQuestions
    );
    const cognizantTest = await createInterviewTest(
      "Cognizant Interview Questions",
      "Cognizant",
      "cognizant",
      cognizantQuestions
    );
    const capgeminiTest = await createInterviewTest(
      "Capgemini Interview Questions",
      "Capgemini",
      "capgemini",
      capgeminiQuestions
    );

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
