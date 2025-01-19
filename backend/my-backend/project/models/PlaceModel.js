const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  difficulty_Level: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true,
  },
  dayTravelTime: {
    type: String,
    required: true,
  },
  nightTravelTime: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

module.exports = mongoose.model('Place', placeSchema);
