// const express = require("express");
// const router = express.Router();
// const FoodCombo = require("../models/schema");

// // Create (POST)
// router.post("/food-combos", async (req, res) => {
//   try {
//     const foodCombo = await FoodCombo.create(req.body);
//     res.status(201).json(foodCombo);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Read All (GET)
// router.get("/food-combos", async (req, res) => {
//   const combos = await FoodCombo.find();
//   res.json(combos);
// });

// // Read One (GET by ID)
// router.get("/food-combos/:id", async (req, res) => {
//   const combo = await FoodCombo.findById(req.params.id);
//   combo ? res.json(combo) : res.status(404).json({ message: "Not Found" });
// });

// // Update (PUT)
// router.put("/food-combos/:id", async (req, res) => {
//   const updatedCombo = await FoodCombo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   updatedCombo ? res.json(updatedCombo) : res.status(404).json({ message: "Not Found" });
// });

// // Delete (DELETE)
// router.delete("/food-combos/:id", async (req, res) => {
//   const deletedCombo = await FoodCombo.findByIdAndDelete(req.params.id);
//   deletedCombo ? res.json({ message: "Deleted" }) : res.status(404).json({ message: "Not Found" });
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const FoodCombo = require("../models/schema");

// // ✅ Create (POST)
// router.post("/food-combos", async (req, res) => {
//   try {
//     const foodCombo = new FoodCombo(req.body);
//     await foodCombo.save();
//     res.status(201).json(foodCombo);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // ✅ Read All (GET)
// router.get("/food-combos", async (req, res) => {
//   try {
//     const combos = await FoodCombo.find();
//     res.json(combos);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching food combos" });
//   }
// });

// // ✅ Read One (GET by ID)
// router.get("/food-combos/:id", async (req, res) => {
//   try {
//     const combo = await FoodCombo.findById(req.params.id);
//     if (!combo) return res.status(404).json({ message: "Food combo not found" });
//     res.json(combo);
//   } catch (error) {
//     res.status(400).json({ error: "Invalid ID" });
//   }
// });

// // ✅ Update (PUT)
// router.put("/food-combos/:id", async (req, res) => {
//   try {
//     const updatedCombo = await FoodCombo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedCombo) return res.status(404).json({ message: "Food combo not found" });
//     res.json(updatedCombo);
//   } catch (error) {
//     res.status(400).json({ error: "Invalid ID or data" });
//   }
// });

// // ✅ Delete (DELETE)
// router.delete("/food-combos/:id", async (req, res) => {
//   try {
//     const deletedCombo = await FoodCombo.findByIdAndDelete(req.params.id);
//     if (!deletedCombo) return res.status(404).json({ message: "Food combo not found" });
//     res.json({ message: "Food combo deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ error: "Invalid ID" });
//   }
// });

// module.exports = router;




const express = require("express");
const router = express.Router();
const FoodCombo = require("../models/schema");

// ✅ Create (POST)
router.post("/food-combos", async (req, res) => {
  try {
    console.log("Received request to create food combo:", req.body);
    const foodCombo = new FoodCombo(req.body);
    await foodCombo.save();
    res.status(201).json(foodCombo);
  } catch (error) {
    console.error("Error creating food combo:", error);
    res.status(400).json({ error: error.message });
  }
});

// ✅ Read All (GET)
router.get("/food-combos", async (req, res) => {
  try {
    console.log("Fetching all food combos...");
    const combos = await FoodCombo.find();
    console.log("Fetched combos:", combos);
    res.json(combos);
  } catch (error) {
    console.error("Error fetching food combos:", error);
    res.status(500).json({ error: "Error fetching food combos" });
  }
});

// ✅ Read One (GET by ID)
router.get("/food-combos/:id", async (req, res) => {
  try {
    console.log(`Fetching food combo with ID: ${req.params.id}`);
    const combo = await FoodCombo.findById(req.params.id);
    if (!combo) {
      console.log("Food combo not found");
      return res.status(404).json({ message: "Food combo not found" });
    }
    res.json(combo);
  } catch (error) {
    console.error("Invalid ID:", error);
    res.status(400).json({ error: "Invalid ID" });
  }
});

// ✅ Update (PUT)
router.put("/food-combos/:id", async (req, res) => {
  try {
    console.log(`Updating food combo with ID: ${req.params.id}`, req.body);
    const updatedCombo = await FoodCombo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCombo) {
      console.log("Food combo not found");
      return res.status(404).json({ message: "Food combo not found" });
    }
    res.json(updatedCombo);
  } catch (error) {
    console.error("Invalid ID or data:", error);
    res.status(400).json({ error: "Invalid ID or data" });
  }
});

// ✅ Delete (DELETE)
router.delete("/food-combos/:id", async (req, res) => {
  try {
    console.log(`Deleting food combo with ID: ${req.params.id}`);
    const deletedCombo = await FoodCombo.findByIdAndDelete(req.params.id);
    if (!deletedCombo) {
      console.log("Food combo not found");
      return res.status(404).json({ message: "Food combo not found" });
    }
    res.json({ message: "Food combo deleted successfully" });
  } catch (error) {
    console.error("Invalid ID:", error);
    res.status(400).json({ error: "Invalid ID" });
  }
});

module.exports = router;
