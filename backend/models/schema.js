const mongoose = require("mongoose");

const foodComboSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [String],
  rating: { type: Number, min: 1, max: 5, default: 3 },
  image: { type: String, required: true }, // Added image field
}, { timestamps: true });

module.exports = mongoose.model("FoodCombo", foodComboSchema);
