const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // needed to parse JSON bodies for POST /users

// In-memory array of users
let users = [
  { name: "John Doe", email: "john@example.com", phone: "123-456-7890", password: "password123" },
  { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", password: "securepass456" }
];

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/", (req, res) => {
  res.redirect("/hello");
});

// GET /users - return the array of users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users - add a new user
app.post("/users", (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: "name, email, phone, and password are all required" });
  }

  const newUser = { name, email, phone, password };
  users.push(newUser);

  res.status(201).json(newUser);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});