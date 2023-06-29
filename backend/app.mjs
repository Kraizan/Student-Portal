import express, { json } from "express";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
import pkg from "./config/config.js";
import cors from "cors";
const { MONGODB_URI } = pkg;

const app = express();
const PORT = 8000;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
