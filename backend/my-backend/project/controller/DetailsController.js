const DetailsModel = require('../models/DetailsModel');

exports.addDetail = async (req, res) => {
  try {
    const detail = new DetailsModel(req.body);
    await detail.save();
    res.status(201).json(detail);
  } catch (error) {
    res.status(500).json({ message: 'Error adding details', error });
  }
};

exports.getAllDetails = async (req, res) => {
  try {
    const details = await DetailsModel.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching details', error });
  }
};

exports.getDetailById = async (req, res) => {
  try {
    const detail = await DetailsModel.findById(req.params.id);
    if (!detail) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json(detail);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching details', error });
  }
};

exports.updateDetail = async (req, res) => {
  try {
    const updatedDetail = await DetailsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDetail) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json(updatedDetail);
  } catch (error) {
    res.status(500).json({ message: 'Error updating details', error });
  }
};

exports.deleteDetail = async (req, res) => {
  try {
    const deletedDetail = await DetailsModel.findByIdAndDelete(req.params.id);
    if (!deletedDetail) {
      return res.status(404).json({ message: 'Details not found' });
    }
    res.status(200).json({ message: 'Details deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting details', error });
  }
};
    