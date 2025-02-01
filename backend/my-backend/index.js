const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const detailsRoutes = require('./project/routes/DetailsRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // JSON middleware

// Serve static files (for uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/details', detailsRoutes);

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/Travelnepal';

// Connecting to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await mongoose.disconnect();
  process.exit(0);
});
