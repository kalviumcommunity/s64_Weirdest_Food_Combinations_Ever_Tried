const mongoose = require("mongoose");

const FoodComboSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  calories: { type: Number, required: true },
  created_by: { type: String, required: true } // ✅ Add created_by field
});

module.exports = mongoose.model("FoodCombo", FoodComboSchema);
