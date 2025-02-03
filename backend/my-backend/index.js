require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const detailsRoute = require('./project/routes/DetailsRoute');
const placeRoute = require('./project/routes/PlaceRoute');
const categoryRoute = require('./project/routes/CategoryRoute');

const app = express();
app.use(express.json());
app.use(cors()); 

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tourism';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/categories', categoryRoute);  
app.use('/api/place', placeRoute);
app.use('/api/details', detailsRoute);
app.use('/uploads', express.static('uploads'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
