const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Import your MongoDB connection

const categoryRoutes = require('./routes/categoryRoutes');
const placeRoutes = require('./routes/placeRoutes');
const detailsRoutes = require('./routes/detailsRoutes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());

// Routes
app.use('/categories', categoryRoutes);
app.use('/places', placeRoutes);
app.use('/details', detailsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
