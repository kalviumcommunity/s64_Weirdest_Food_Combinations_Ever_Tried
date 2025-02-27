// require("dotenv").config();
// const express = require("express");
// const connectDB = require("./db.js");
// const routes = require("./routes/routes");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Use Routes
// app.use("/api", routes);

// app.get("/", (req, res) => {
//   res.json({ message: "🚀 Welcome to the ASAP Project!", databaseStatus: "Connected" });
// });

// // Start Server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const foodRoutes = require("./routes/routes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (for images)
app.use("/assets", express.static("frontend/src/assets"));

// Routes
app.use("/api", foodRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
