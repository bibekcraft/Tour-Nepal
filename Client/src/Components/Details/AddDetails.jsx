import React, { useState } from "react";
import { FaUpload, FaPlusCircle, FaMapMarkerAlt, FaStar, FaClock, FaList, FaMap, FaUtensils, FaUserTie, FaQuestionCircle } from "react-icons/fa";
import { MdCategory, MdDescription } from "react-icons/md";

const DetailsForm = () => {
  const [formData, setFormData] = useState({
    firstimage1: "",
    firstimage2: "",
    firstimage3: "",
    firstimage4: "",
    firstimage5: "",
    name: "",
    location: "",
    difficulty: "",
    duration: "",
    tour_overview: "",
    tour_highlights: "",
    whats_included: "",
    itinerary: "",
    map_image: "",
    recommendations: "",
    must_try_food: "",
    recommended_guides: "",
    faqs: "",
    category: "",
    place: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-blue-500" /> Add Tour Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <div className="flex items-center border rounded-lg p-3">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input type="text" name="name" className="w-full outline-none" placeholder="Enter name" onChange={handleChange} required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            <div className="flex items-center border rounded-lg p-3">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input type="text" name="location" className="w-full outline-none" placeholder="Enter location" onChange={handleChange} required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Difficulty</label>
            <div className="flex items-center border rounded-lg p-3">
              <FaStar className="text-gray-500 mr-2" />
              <input type="text" name="difficulty" className="w-full outline-none" placeholder="Enter difficulty" onChange={handleChange} required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Duration</label>
            <div className="flex items-center border rounded-lg p-3">
              <FaClock className="text-gray-500 mr-2" />
              <input type="text" name="duration" className="w-full outline-none" placeholder="Enter duration" onChange={handleChange} required />
            </div>
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Tour Overview</label>
            <textarea name="tour_overview" className="w-full border rounded-lg p-3" placeholder="Enter tour overview" onChange={handleChange} required />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Tour Highlights</label>
            <textarea name="tour_highlights" className="w-full border rounded-lg p-3" placeholder="Enter tour highlights" onChange={handleChange} required />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Itinerary</label>
            <textarea name="itinerary" className="w-full border rounded-lg p-3" placeholder="Enter itinerary details" onChange={handleChange} required />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Upload Images</label>
            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100">
              <FaUpload className="text-gray-600 mb-2 text-3xl" />
              <span className="text-gray-600">Click to upload</span>
              <input type="file" name="firstimage1" className="hidden" onChange={handleChange} required />
            </label>
          </div>
        </div>
        <button type="button" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 font-semibold">
          <FaPlusCircle className="text-white" /> Submit
        </button>
      </div>
    </div>
  );
};

export default DetailsForm;
