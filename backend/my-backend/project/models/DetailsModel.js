const mongoose = require('mongoose');

const DetailsSchema = new mongoose.Schema({
  firstimage1: { type: String, default: null },
  firstimage2: { type: String, default: null },
  firstimage3: { type: String, default: null },
  firstimage4: { type: String, default: null },
  firstimage5: { type: String, default: null },
  name: { type: String, required: true },
  location: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: String, required: true },
  tour_overview: { type: String, required: true },
  tour_highlights: { type: [String], required: true },
  whats_included: { type: [String], required: true },
  itinerary: { type: [String], required: true },
  map_image: { type: String, default: null },
  recommendations: { type: [String], required: true },
  must_try_food: { type: [String], required: true },
  recommended_guides: { type: [String], required: true },
  faqs: { type: [{ question: String, answer: String }], required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Details', DetailsSchema);
