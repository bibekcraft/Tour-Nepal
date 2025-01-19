const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
  placeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  image3: {
    type: String,
    required: true,
  },
  image4: {
    type: String,
    required: true,
  },
  image5: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  travel: {
    daytravel: {
      type: String,
      required: true,
    },
    nighttravel: {
      type: String,
      required: true,
    },
  },
  location: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
  },
  tourHighlights: {
    type: String,
  },
  whatIncluded: {
    type: String,
  },
  itinerary: {
    type: String,
  },
  mapImage: {
    type: String,
  },
  recommendedPlace: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  recommendedFood: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  recommendedGuide: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  faq: {
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
  },
});

module.exports = mongoose.model('Details', detailsSchema);
