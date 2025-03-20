import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddFoodCombo from "./AddFoodCombo";

const WeirdFoodCombo = () => {
  const [foodCombos, setFoodCombos] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFoodCombos();
    fetchUsers();
  }, []);

  const fetchFoodCombos = () => {
    fetch("http://localhost:3000/api/food-combos")
      .then((response) => response.json())
      .then((data) => {
        setFoodCombos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch food combos ${error}`);
        setLoading(false);
      });
  };

  const fetchUsers = () => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Failed to fetch users:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/food-combos/${id}`, { method: "DELETE" })
      .then(() => setFoodCombos(foodCombos.filter((combo) => combo._id !== id)))
      .catch((err) => console.error("Failed to delete:", err));
  };

  const handleNewCombo = (newCombo) => {
    setFoodCombos([...foodCombos, newCombo]);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const filteredCombos = selectedUser
    ? foodCombos.filter((combo) => combo.created_by === selectedUser)
    : foodCombos;

  if (loading) return <p>Loading food combos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weirdest Food Combos Ever Tried 🤯</h1>

      {/* User Filter Dropdown */}
      <select onChange={handleUserChange} value={selectedUser} style={styles.dropdown}>
        <option value="">All Users</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <AddFoodCombo onComboAdded={handleNewCombo} users={users} />

      <div style={styles.comboList}>
        {filteredCombos.map((combo) => (
          <div key={combo._id} style={styles.card}>
            <img src={combo.image} alt={combo.name} style={styles.image} />
            <h3 style={styles.comboTitle}>{combo.name}</h3>
            <p style={styles.description}>{combo.description}</p>
            <p style={styles.userInfo}>
              <strong>Created by:</strong> {users.find((user) => user._id === combo.created_by)?.name || "Unknown"}
            </p>
            <div style={styles.buttonContainer}>
              <Link to={`/edit/${combo._id}`} style={styles.editButton}>
                Edit
              </Link>
              <button onClick={() => handleDelete(combo._id)} style={styles.deleteButton}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "50px", backgroundColor: "#fff3e6", minHeight: "100vh" },
  title: { fontSize: "2.8rem", fontWeight: "bold", color: "#ff5733", marginBottom: "20px" },
  dropdown: { marginBottom: "20px", padding: "10px", fontSize: "1rem", borderRadius: "5px" },
  comboList: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto" },
  card: { background: "white", padding: "20px", borderRadius: "12px", textAlign: "center", boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)" },
  image: { width: "100%", borderRadius: "10px", height: "180px", objectFit: "cover" },
  comboTitle: { fontSize: "1.3rem", fontWeight: "bold", color: "#ff5733" },
  description: { fontSize: "1rem", color: "#444" },
  userInfo: { fontSize: "0.9rem", color: "#666", fontStyle: "italic" },
  buttonContainer: { marginTop: "10px", display: "flex", justifyContent: "center", gap: "10px" },
  editButton: { textDecoration: "none", backgroundColor: "#ffcc00", padding: "8px 12px", borderRadius: "6px", color: "black", fontWeight: "bold" },
  deleteButton: { backgroundColor: "#ff5733", border: "none", padding: "8px 12px", borderRadius: "6px", color: "white", fontWeight: "bold", cursor: "pointer" },
};

export default WeirdFoodCombo;
