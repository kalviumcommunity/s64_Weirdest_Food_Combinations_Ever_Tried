const express = require("express");
const router = express.Router();
const FoodCombo = require("../models/schema");

// Create (POST)
router.post("/food-combos", async (req, res) => {
  try {
    const foodCombo = await FoodCombo.create(req.body);
    res.status(201).json(foodCombo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All (GET)
router.get("/food-combos", async (req, res) => {
  const combos = await FoodCombo.find();
  res.json(combos);
});

// Read One (GET by ID)
router.get("/food-combos/:id", async (req, res) => {
  const combo = await FoodCombo.findById(req.params.id);
  combo ? res.json(combo) : res.status(404).json({ message: "Not Found" });
});

// Update (PUT)
router.put("/food-combos/:id", async (req, res) => {
  const updatedCombo = await FoodCombo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updatedCombo ? res.json(updatedCombo) : res.status(404).json({ message: "Not Found" });
});

// Delete (DELETE)
router.delete("/food-combos/:id", async (req, res) => {
  const deletedCombo = await FoodCombo.findByIdAndDelete(req.params.id);
  deletedCombo ? res.json({ message: "Deleted" }) : res.status(404).json({ message: "Not Found" });
});

module.exports = router;
