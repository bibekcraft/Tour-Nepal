const express = require('express');
const mongoose = require('mongoose');
const detailsRoute = require('./project/routes/DetailsRoute'); // Adjust the path as needed
const placeRoute=require('./project/routes/PlaceRoute')
const categoryRoute=require('./project/routes/CategoryRoute')
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tourism', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Use the details route
app.use('/category',categoryRoute)
app.use('/place',placeRoute)
app.use('/details', detailsRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});