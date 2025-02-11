require("dotenv").config();
const express = require("express");
const connectDB = require("./db.js");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ message: "🚀 Welcome to the ASAP Project!", databaseStatus: "Connected" });
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
