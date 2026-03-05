require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("📌 Initializing routes...");

// Routes
try {
  const userRoutes = require("./routes/userRoutes");
  console.log("✅ Loaded: userRoutes");
  app.use("/api/users", userRoutes);
} catch (err) {
  console.error("❌ Error loading userRoutes:", err.message);
}

try {
  const testsRoutes = require("./routes/testsRoutes");
  console.log("✅ Loaded: testsRoutes");
  app.use("/api/tests", testsRoutes);
} catch (err) {
  console.error("❌ Error loading testsRoutes:", err.message);
}

try {
  const resultsRoutes = require("./routes/resultsRoutes");
  console.log("✅ Loaded: resultsRoutes");
  app.use("/api/results", resultsRoutes);
} catch (err) {
  console.error("❌ Error loading resultsRoutes:", err.message);
}

try {
  const seedRoutes = require("./routes/seedRoutes");
  console.log("✅ Loaded: seedRoutes");
  app.use("/api/seed", seedRoutes);
} catch (err) {
  console.error("❌ Error loading seedRoutes:", err.message);
}

// Health check route
app.get("/", (req, res) => {
  res.json({
    message: "PlaceO Backend Server Running",
    status: "active",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
  console.log(`📊 Database: Connected to MongoDB`);
});
