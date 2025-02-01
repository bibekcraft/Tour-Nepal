const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./project/routes/CategoryRoute');
const detailsRoutes = require('./project/routes/DetailsRoute');
const placeRoutes = require('./project/routes/PlaceRoute');

const app = express();

// Middleware
app.use(express.json());  // Use express built-in JSON middleware

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/details', detailsRoutes);
app.use('/api/places', placeRoutes);

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/Travelnepal';

// Connecting to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});
