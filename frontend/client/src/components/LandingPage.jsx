import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f8f8f8",
      textAlign: "center",
      minHeight: "100vh",
    },
    hero: {
      backgroundColor: "#ffcc00",
      width: "80%",
      padding: "50px 20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      marginBottom: "30px",
      animation: "fadeIn 1s ease-in-out",
    },
    title: {
      fontSize: "2.5rem",
      color: "#333",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#555",
      marginTop: "10px",
    },
    button: {
      backgroundColor: "#ff5733",
      color: "white",
      padding: "12px 24px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "20px",
      transition: "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
    },
    buttonHover: {
      backgroundColor: "#e74c3c",
      transform: "scale(1.05)",
    },
    featuredCombos: {
      width: "80%",
      margin: "40px 0",
      padding: "20px",
      animation: "fadeInUp 1s ease-in-out",
    },
    comboList: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "20px",
    },
    combo: {
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease-in-out",
      width: "220px",
      textAlign: "center",
      cursor: "pointer",
    },
    comboHover: {
      transform: "scale(1.1)",
    },
    comboImage: {
      borderRadius: "10px",
      width: "100%",
      height: "auto",
    },
    ctaSection: {
      backgroundColor: "#ffcc00",
      width: "80%",
      padding: "50px 20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      marginTop: "40px",
      animation: "fadeIn 1s ease-in-out",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.title}>Weirdest Food Combos Ever Tried</h1>
        <p style={styles.subtitle}>
          Ever dipped fries in ice cream? Or tried peanut butter on burgers?  
          Join the fun and explore the weirdest food combinations ever! 🍕🍫🍟
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
          onClick={() => navigate("/food-combos")}
        >
          Submit Yours
        </button>
      </header>

      {/* Featured Combos */}
      <section style={styles.featuredCombos}>
        <h2 style={styles.title}>Popular Weird Combos 🍽️</h2>
        <div style={styles.comboList}>
          <div
            style={styles.combo}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.comboHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.combo)}
          >
            <img src="https://www.benandjerry.com.au/files/live/sites/au/files/migrated/whats-new/30685-ANZ-impossible-to-eat-burger/Blog-1200x630.png" alt="Burger & Ice Cream" style={styles.comboImage} />
            <p>Burger + Ice Cream 🍔🍦</p>
          </div>
          <div
            style={styles.combo}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.comboHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.combo)}
          >
            <img src="https://ultrathinpizzacrust.com/wp-content/uploads/2016/05/peanut-butter-banana-pizza-scaled.jpg" alt="Pizza & Banana" style={styles.comboImage} />
            <p>Pizza + Banana 🍕🍌</p>
          </div>
          <div
            style={styles.combo}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.comboHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.combo)}
          >
            <img src="https://assets.teenvogue.com/photos/56a00fada86d43213b0dc54e/16:9/w_1280,c_limit/ChocolateFries.png" alt="Fries & Chocolate" style={styles.comboImage} />
            <p>Fries + Chocolate 🍟🍫</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <h2 style={styles.title}>Have a Crazy Combo? 🤯</h2>
        <p style={styles.subtitle}>Join our community and submit your favorite weird food mix!</p>
        <button
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
          onClick={() => navigate("/food-combos")}
        >
          Submit Now
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
