const express = require("express");
const router = express.Router();

// Sample Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Authentication logic here
  if (username === "user" && password === "password") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
