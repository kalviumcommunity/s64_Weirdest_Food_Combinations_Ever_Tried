import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FoodCombos from "./components/WeirdFoodCombo";
import AddFoodCombo from "./components/AddFoodCombo"; // ✅ Import AddFoodCombo
import UpdateFoodCombo from "./components/UpdateFoodCombo";
// const NotFound = () => <h2>404 - Page Not Found</h2>;

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/food-combos" element={<FoodCombos />} />
          <Route path="/add-food-combo" element={<AddFoodCombo />} /> {/* ✅ Add new route */}
          <Route path="/edit/:id" element={<UpdateFoodCombo />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
 );
};

export default App;
