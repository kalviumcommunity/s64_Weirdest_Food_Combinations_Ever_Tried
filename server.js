// const express = require('express');
// const app = express();

// app.get('/Ping', (req, res) => {
//     res.send('Pong');
//     });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//     });

// const express = require("express");
// const connectDB = require("./db");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();

// app.get("/", (req, res) => {
//     res.send("MongoDB Atlas is connected to VS Code!");
// });

// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Home Route with DB Status
app.get("/", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to the ASAP Project!", databaseStatus: dbStatus });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
