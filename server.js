require("dotenv").config();
const reviewRoutes = require("./routes/reviewRoutes");
const profileRoutes = require("./routes/profileRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const userRoutes = require("./routes/userRoutes");
const express = require("express");
const cors = require("cors");
const upload = require("./middleware/upload");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/reviews", reviewRoutes);

app.use("/api/favorites", favoriteRoutes);

app.use("/api/users", userRoutes);

app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.send("MongoDB API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});