// const http = require("http")
const express = require("express");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/product", productRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
