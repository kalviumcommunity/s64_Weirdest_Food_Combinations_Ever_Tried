import { useState } from "react";

export default function App() {
  const [foodCombos] = useState([
    { combo: "🍕 Pizza + Chocolate 🍫", rating: "⭐ 4.5" },
    { combo: "🥒 Pickles + Ice Cream 🍦", rating: "⭐ 3.8" },
    { combo: "🍉 Watermelon + Cheese 🧀", rating: "⭐ 4.2" },
    { combo: "🍔 Burger + Peanut Butter 🥜", rating: "⭐ 4.7" },
  ]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-800 via-pink-600 to-yellow-400 text-white px-6">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">🍽️ Weirdest Food Combos</h1>
        <button className="btn">Submit Yours 🚀</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-heading">Dare to Try the Weirdest Food Combos? 🤯</h1>
        <p className="hero-text">
          Discover bizarre food combinations people swear by! Rate, submit, and share your favorites.
        </p>
        <button className="btn mt-6">🍕 Add Your Combo!</button>
      </header>

      {/* Featured Combos */}
      <section className="combos">
        <h2 className="section-title">🔥 Trending Weird Combos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {foodCombos.map((item, index) => (
            <div key={index} className="card">
              <p className="text-lg font-semibold">{item.combo}</p>
              <p className="mt-2 text-yellow-200">{item.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">© {new Date().getFullYear()} Weirdest Food Combos. All rights reserved.</footer>
    </div>
  );
}
