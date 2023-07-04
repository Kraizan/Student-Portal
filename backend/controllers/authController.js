const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const config = require("../config/config.js");

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, config.JWT_SECRET);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
