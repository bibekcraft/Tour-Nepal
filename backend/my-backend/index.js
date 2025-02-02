require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const detailsRoute = require('./project/routes/DetailsRoute');
const placeRoute = require('./project/routes/PlaceRoute');
const categoryRoute = require('./project/routes/CategoryRoute');

const app = express();
app.use(express.json());

// Use environment variables
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tourism';
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define API routes
app.use('/category', categoryRoute);
app.use('/place', placeRoute);
app.use('/details', detailsRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
