import { useState } from "react";
import useCategories from "../Category/useCategories";
import { FaUpload, FaPlus } from "react-icons/fa"; // Icons for upload and add
import { toast } from "react-toastify"; // For notifications

const AddCategory = () => {
  const { addCategoryMutation } = useCategories();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null); // Store the uploaded image file
  const [preview, setPreview] = useState(""); // For image preview

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Category name is required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    if (image) {
      formData.append("image", image);
    }

    addCategoryMutation.mutate(formData, {  
      onSuccess: () => {
        toast.success("Category added successfully!");
        setName("");
        setImage(null);
        setPreview("");
      },
      onError: (error) => {
        toast.error("Failed to add category. Please try again.");
        console.error("Error adding category:", error);
      },
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <FaPlus className="text-blue-500" /> Add New Category
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Image
          </label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
            >
              <FaUpload className="text-gray-500 mr-2" />
              <span className="text-gray-600">
                {preview ? "Change Image" : "Upload Image"}
              </span>
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            {preview && (
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={addCategoryMutation.isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          {addCategoryMutation.isLoading ? (
            <span className="animate-spin">🌀</span>
          ) : (
            <>
              <FaPlus /> Add Category
            </>
          )}
        </button>

        {/* Error Message */}
        {addCategoryMutation.isError && (
          <p className="text-red-500 text-sm mt-2">
            Error: {addCategoryMutation.error.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddCategory;