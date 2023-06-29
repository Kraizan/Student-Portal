import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
