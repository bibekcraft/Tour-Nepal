const mongoose = require('mongoose');

const DetailsSchema = new mongoose.Schema({
  image1: { type: String,required:true},
  image2: { type: String,required:true},
  image3: { type: String,required:true},
  image4: { type: String,required:true},
  image5: { type: String,required:true},
  name: { type: String, required: true },
  location: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: Number, required: true }, // Duration in days
  tour_overview: { type: String, required: true },
  tour_highlights: { type: [String], required: true },
  whats_included: [{
    item: String,
    description: String
  }],
  itinerary: { type: [String], required: true },
  map_image: { type: String, default: null },
  recommendations: { type: [String], required: true },
  must_try_food: { type: [String], required: true },
  recommended_guides: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guide' }],
  faqs: [{ question: String, answer: String }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
  geo_location: {
    latitude: { type: Number },
    longitude: { type: Number }
  },
  reviews: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String }
  }],
  tags: { type: [String], default: [] },
  price: { type: Number, required: true },
  currency: { type: String, default: "NPR" },
  favorited_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Details', DetailsSchema);
