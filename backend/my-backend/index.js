require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const detailsRoute = require("./project/routes/DetailsRoute");
const placeRoute = require("./project/routes/PlaceRoute");
const categoryRoute = require("./project/routes/CategoryRoute");
const blogRoute = require("./project/routes/BlogRoutes"); // Add blog routes for managing blogs

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/tourism";
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Public Routes (for everyone without authentication)

// Anyone can view categories
app.use("/api/categories", categoryRoute);

// Anyone can view places
app.use("/api/place", placeRoute);

// Anyone can view details
app.use("/api/details", detailsRoute);

// Anyone can view and add blogs (use Multer for image uploads)
app.use("/api/blog", blogRoute);

// Static files for uploaded images (useful for blog images)
app.use("/uploads", express.static("uploads"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
