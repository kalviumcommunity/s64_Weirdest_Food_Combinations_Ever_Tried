import React, { useState, useEffect } from "react";
import axios from "axios";

const AddFoodCombo = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [calories, setCalories] = useState("");
  const [users, setUsers] = useState([]); // Store users for the dropdown
  const [createdBy, setCreatedBy] = useState(""); // Selected user

  // Fetch users on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const foodCombo = {
      name,
      ingredients: ingredients.split(",").map((item) => item.trim()), // Convert string to array
      calories: Number(calories),
      created_by: createdBy, // Include selected user
    };

    try {
      const response = await axios.post("http://localhost:5000/food-combos", foodCombo);
      console.log("Food combo added:", response.data);
      setName("");
      setIngredients("");
      setCalories("");
      setCreatedBy("");
    } catch (error) {
      console.error("Error adding food combo:", error);
    }
  };

  // Inline Styles
  const styles = {
    container: {
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      background: "#fff",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontWeight: "bold",
      marginTop: "10px",
    },
    input: {
      padding: "8px",
      marginTop: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      marginTop: "15px",
      padding: "10px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#218838",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add a New Food Combo</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Ingredients (comma-separated):</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Created By:</label>
        <select value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} required style={styles.input}>
          <option value="">Select a User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.username}
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Add Food Combo
        </button>
      </form>
    </div>
  );
};

export default AddFoodCombo;
