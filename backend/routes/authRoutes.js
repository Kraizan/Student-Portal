const { register, login } = require("../controllers/authController");
const express = require("express");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Route to check if user is logged in
router.get("/isLoggedIn", (req, res) => {
  if (req.user) {
    // User is logged in
    res.json({ isLoggedIn: true });
  } else {
    // User is not logged in
    res.json({ isLoggedIn: false });
  }
});

module.exports = router;
