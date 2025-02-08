import { useState } from "react";
import { FaUpload, FaPlusCircle, FaMapMarkerAlt } from "react-icons/fa";
import { MdCategory, MdDescription } from "react-icons/md";
import { useCategories } from "../hooks/useCategory"; // Importing the useCategories hook

const AddPlace = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); // Store selected category ID
  const [, setImage] = useState(null);

  const { data: categories, isLoading, error } = useCategories(); // Fetch categories

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-blue-500" /> Add Place
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Place Name</label>
          <div className="flex items-center border rounded-lg p-3">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Enter place name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Location</label>
          <div className="flex items-center border rounded-lg p-3">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <div className="flex items-center border rounded-lg p-3">
            <MdDescription className="text-gray-500 mr-2" />
            <textarea
              className="w-full outline-none"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <div className="flex items-center border rounded-lg p-3">
            <MdCategory className="text-gray-500 mr-2" />
            <select
              className="w-full outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {isLoading ? (
                <option>Loading...</option>
              ) : error ? (
                <option>Error loading categories</option>
              ) : (
                categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
          <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100">
            <FaUpload className="text-gray-600 mb-2 text-3xl" />
            <span className="text-gray-600">Click to upload</span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </label>
        </div>

        <button
          type="button"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 font-semibold"
        >
          <FaPlusCircle className="text-white" /> Submit
        </button>
      </div>
    </div>
  );
};

export default AddPlace;
