import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FoodCombos from "./components/WeirdFoodCombo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/food-combos" element={<FoodCombos />} />
      </Routes>
    </Router>
  );
};

export default App;
