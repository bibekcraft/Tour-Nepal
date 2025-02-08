import { useState } from "react";
import { FaUpload, FaPlusCircle, FaMapMarkerAlt } from "react-icons/fa";

const DetailsForm = () => {
  const [formData, setFormData] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    name: "",
    location: "",
    difficulty: "",
    duration: "",
    tour_overview: "",
    tour_highlights: [],
    whats_included: [],
    itinerary: [],
    recommendations: [],
    must_try_food: [],
    recommended_guides: [],
    faqs: [{ question: "", answer: "" }],
    map_image: "",
    category: "",
    place: "",
    geo_location: { latitude: "", longitude: "" },
    price: "",
    currency: "NPR",
    tags: [],
    reviews: [],
    favorited_by: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (name, index, value) => {
    const updatedArray = [...formData[name]];
    updatedArray[index] = value;
    setFormData({ ...formData, [name]: updatedArray });
  };

  const addArrayField = (name) => {
    setFormData({ ...formData, [name]: [...formData[name], ""] });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageNames = Array.from(files).map(file => file.name); // Get the file names
    setFormData({ ...formData, images: imageNames });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form data to the backend API
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-start justify-start">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-500" /> Add Tour Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            {/* PHOTO */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">photo</label>
              <input type="text" name="name" className="w-full border rounded-lg p-3" placeholder="Enter name" onChange={handleChange} required />
            </div>

            
            {/* Tour Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" name="name" className="w-full border rounded-lg p-3" placeholder="Enter name" onChange={handleChange} required />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Location</label>
              <input type="text" name="location" className="w-full border rounded-lg p-3" placeholder="Enter location" onChange={handleChange} required />
            </div>

            {/* Tour Highlights */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Tour Highlights</label>
              {formData.tour_highlights.map((item, index) => (
                <input key={index} type="text" className="w-full border rounded-lg p-3 mb-2" placeholder="Enter tour highlight" value={item} onChange={(e) => handleArrayChange("tour_highlights", index, e.target.value)} />
              ))}
              <button type="button" className="text-blue-500" onClick={() => addArrayField("tour_highlights")}>+ Add More</button>
            </div>

            {/* Recommended Guides */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Recommended Guides</label>
              {formData.recommended_guides.map((item, index) => (
                <input key={index} type="text" className="w-full border rounded-lg p-3 mb-2" placeholder="Enter guide name" value={item} onChange={(e) => handleArrayChange("recommended_guides", index, e.target.value)} />
              ))}
              <button type="button" className="text-blue-500" onClick={() => addArrayField("recommended_guides")}>+ Add More</button>
            </div>

            {/* FAQs */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">FAQs</label>
              {formData.faqs.map((faq, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input type="text" className="w-1/2 border rounded-lg p-3" placeholder="Question" value={faq.question} onChange={(e) => handleArrayChange("faqs", index, { ...faq, question: e.target.value })} />
                  <input type="text" className="w-1/2 border rounded-lg p-3" placeholder="Answer" value={faq.answer} onChange={(e) => handleArrayChange("faqs", index, { ...faq, answer: e.target.value })} />
                </div>
              ))}
              <button type="button" className="text-blue-500" onClick={() => addArrayField("faqs")}>+ Add More</button>
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Upload Images</label>
              <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100">
                <FaUpload className="text-gray-600 mb-2 text-3xl" />
                <span className="text-gray-600">Click to upload</span>
                <input type="file" name="images" className="hidden" onChange={handleImageChange} multiple />
              </label>
              <div className="mt-2">
                <p className="text-gray-600">Uploaded Images: {formData.images.join(", ")}</p>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg hover:opacity-90 transition flex items-center gap-2 font-semibold">
              <FaPlusCircle className="text-white" /> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
