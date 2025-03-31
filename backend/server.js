require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request body

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Task Timer Backend is Running 🚀");
});

const path = require("path");

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "frontend")));

app.listen(5001, () => {
  console.log("Server running on port 5001");
});

// Import API Routes
const apiRoutes = require("./apiRoutes");
app.use("/api", apiRoutes);  // Use /api as the base URL for API routes

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post("/api/auth/signup", (req, res) => {
  res.json({ message: "Signup successful!" });
});

app.post("/api/auth/login", (req, res) => {
  res.json({ message: "Login successful!", token: "dummy_token" });
});

