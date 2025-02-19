import React from "react";

const WeirdFoodCombo = () => {
  const foodCombinations = [
    {
      name: "Burger & Ice Cream",
      image: "https://www.benandjerry.com.au/files/live/sites/au/files/migrated/whats-new/30685-ANZ-impossible-to-eat-burger/Blog-1200x630.png",
      description: "A sweet and savory delight! 🍔🍦",
    },
    {
      name: "Pizza & Banana",
      image: "https://ultrathinpizzacrust.com/wp-content/uploads/2016/05/peanut-butter-banana-pizza-scaled.jpg",
      description: "Tropical meets cheesy! 🍕🍌",
    },
    {
      name: "Fries & Chocolate",
      image: "https://assets.teenvogue.com/photos/56a00fada86d43213b0dc54e/16:9/w_1280,c_limit/ChocolateFries.png",
      description: "Crispy and chocolaty goodness! 🍟🍫",
    },
    {
      name: "Popcorn & Ketchup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIDl1OHB7GXOW11KJt1XsDPTtEXgqekWZ9A&s",
      description: "A tangy, crunchy surprise! 🍿🍅",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weirdest Food Combos Ever Tried 🤯</h1>
      <div style={styles.comboList}>
        {foodCombinations.map((combo, index) => (
          <div key={index} style={styles.card}>
            <img src={combo.image} alt={combo.name} style={styles.image} />
            <h3 style={styles.comboTitle}>{combo.name}</h3>
            <p style={styles.description}>{combo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#fff3e6",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#ff5733",
    marginBottom: "20px",
  },
  comboList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    height: "180px",
    objectFit: "cover",
  },
  comboTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginTop: "12px",
    color: "#ff5733",
  },
  description: {
    fontSize: "1rem",
    color: "#444",
    marginTop: "8px",
  },
};

export default WeirdFoodCombo;
