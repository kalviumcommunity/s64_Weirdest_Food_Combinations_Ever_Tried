import React, { useState } from "react";

const AddFoodCombo = ({ onComboAdded }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newCombo = { name, image, description };

    try {
      const response = await fetch("http://localhost:3000/api/food-combos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCombo),
      });

      if (!response.ok) {
        throw new Error("Failed to add food combo");
      }

      const addedCombo = await response.json();
      onComboAdded(addedCombo); // Update the list
      setName("");
      setImage("");
      setDescription("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Add a New Weird Food Combo</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Food Combo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.textarea}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Adding..." : "Add Combo"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    minHeight: "60px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#ff5733",
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddFoodCombo;



