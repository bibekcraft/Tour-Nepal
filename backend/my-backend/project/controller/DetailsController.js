const DetailsModel = require('../models/DetailsModel');

// Create a new details entry
exports.addDetails = async (req, res) => {
  try {
    const newDetails = new DetailsModel({
      firstimage1: req.files?.firstimage1?.[0]?.path || null,
      firstimage2: req.files?.firstimage2?.[0]?.path || null,
      firstimage3: req.files?.firstimage3?.[0]?.path || null,
      firstimage4: req.files?.firstimage4?.[0]?.path || null,
      firstimage5: req.files?.firstimage5?.[0]?.path || null,
      name: req.body.name,
      location: req.body.location,
      difficulty: req.body.difficulty,
      duration: req.body.duration,
      tour_overview: req.body.tour_overview,
      tour_highlights: req.body.tour_highlights,
      whats_included: req.body.whats_included,
      itinerary: req.body.itinerary,
      map_image: req.files?.map_image?.[0]?.path || null,
      recommendations: req.body.recommendations,
      must_try_food: req.body.must_try_food,
      recommended_guides: req.body.recommended_guides,
      faqs: req.body.faqs,
      category: req.body.category,
      place: req.body.place,
    });

    await newDetails.save();
    res.status(201).json(newDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all details
exports.getAllDetails = async (req, res) => {
  try {
    const details = await DetailsModel.find().populate('category').populate('place');
    res.status(200).json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a single details entry by ID
exports.getDetailsById = async (req, res) => {
  try {
    const details = await DetailsModel.findById(req.params.id).populate('category').populate('place');
    if (!details) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a details entry
exports.updateDetails = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
      firstimage1: req.files?.firstimage1?.[0]?.path || req.body.firstimage1,
      firstimage2: req.files?.firstimage2?.[0]?.path || req.body.firstimage2,
      firstimage3: req.files?.firstimage3?.[0]?.path || req.body.firstimage3,
      firstimage4: req.files?.firstimage4?.[0]?.path || req.body.firstimage4,
      firstimage5: req.files?.firstimage5?.[0]?.path || req.body.firstimage5,
      map_image: req.files?.map_image?.[0]?.path || req.body.map_image,
    };

    const updatedDetails = await DetailsModel.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedDetails) {
      return res.status(404).json({ message: 'Details not found' });
    }

    res.status(200).json(updatedDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a details entry by ID
exports.deleteDetails = async (req, res) => {
  try {
    const deletedDetails = await DetailsModel.findByIdAndDelete(req.params.id);
    if (!deletedDetails) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json({ message: 'Details deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};
