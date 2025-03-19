import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateFoodCombo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [combo, setCombo] = useState({ name: "", description: "", image: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/food-combos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCombo(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    setCombo({ ...combo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/food-combos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(combo),
    })
      .then(() => navigate("/"))
      .catch((err) => console.error("Update failed:", err));
  };

  if (loading) return <p>Loading food combo...</p>;

  return (
    <div style={styles.container}>
      <h2>Edit Food Combo</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={combo.name}
          onChange={handleChange}
          placeholder="Food Name"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="image"
          value={combo.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          style={styles.input}
        />
        <textarea
          name="description"
          value={combo.description}
          onChange={handleChange}
          placeholder="Description"
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Update</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" },
  input: { padding: "10px", fontSize: "16px", width: "100%" },
  textarea: { padding: "10px", fontSize: "16px", width: "100%", height: "100px" },
  button: { padding: "10px", fontSize: "16px", backgroundColor: "#ff5733", color: "white", border: "none", cursor: "pointer" }
};

export default UpdateFoodCombo;
