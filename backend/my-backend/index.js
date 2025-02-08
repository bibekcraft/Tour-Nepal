require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routes
const detailsRoute = require('./project/routes/DetailsRoute');
const placeRoute = require('./project/routes/PlaceRoute');
const categoryRoute = require('./project/routes/CategoryRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

// MongoDB URI and Port
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tourism';
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// API Routes
app.use('/api/categories', categoryRoute);
app.use('/api/place', placeRoute);
app.use('/api/details', detailsRoute);

// Static files (e.g., uploaded images)
app.use('/uploads', express.static('uploads'));

// HTTP server for local development
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
