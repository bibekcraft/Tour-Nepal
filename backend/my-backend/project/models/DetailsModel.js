const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema({
  images: [{ type: String, required: true }], // Array of image URLs
  name: { type: String, required: true },
  location: { type: String, required: true },
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
  duration: { type: String, required: true },
  tour_overview: { type: String, required: true },
  tour_highlights: [{ type: String, required: true }], // Array of tour highlights
  whats_included: [{ type: String, required: true }], // Array of included items
  itinerary: [
    {
      day: { type: Number, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  map: { type: String, required: true }, // URL for the map image
  recommendations: [
    {
      image: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  must_try_food: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  recommended_guides: [
    {
      name: { type: String, required: true },
      experience: { type: String, required: true },
      contact: { type: String, required: true },
    },
  ],
  faqs: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true, // Ensures that every detail entry has a category
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: true, // Ensures that every detail entry is linked to a place
  },
});

const DetailsModel = mongoose.model("DetailsModel", DetailsSchema);

module.exports = DetailsModel;
