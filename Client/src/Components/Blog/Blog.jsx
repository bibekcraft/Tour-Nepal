import { useState } from "react";
import { FaPen, FaUser, FaImage, FaAlignLeft, FaCalendarAlt } from "react-icons/fa";
import { useAddBlog } from "../hooks/Blog";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Blog = () => {
  // Use the useAddBlog hook to handle the blog submission
  const { mutate: addBlog, isLoading } = useAddBlog();
  
  // State for form data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    images: [],
    createdAt: new Date().toISOString().split("T")[0],
  });

  // State for image previews
  const [imagePreviews, setImagePreviews] = useState([]);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024); // 5MB limit

    if (validFiles.length < files.length) {
      toast.error("Some files exceeded the 5MB limit.");
    }

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...validFiles],
    }));

    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.title.trim() || !formData.content.trim() || !formData.author.trim()) {
      toast.error("All fields are required.");
      return;
    }

    // Prepare FormData for the API request
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((img) => submitData.append("images", img));
      } else {
        submitData.append(key, value);
      }
    });

    try {
      // Call the addBlog mutation
      await addBlog(submitData);
      toast.success("Blog published successfully!");
      
      // Reset form data and image previews
      setFormData({
        title: "",
        content: "",
        author: "",
        images: [],
        createdAt: new Date().toISOString().split("T")[0],
      });
      setImagePreviews([]);
    } catch (error) {
      toast.error("Failed to publish blog: " + error.message);
    }
  };

  return (
    <div className="max-w-4xl px-6 py-12 mx-auto bg-gray-50">
      <div className="relative p-10 overflow-hidden bg-white shadow-lg rounded-3xl">
        <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Write Your Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div className="w-full lg:w-1/2">
              <label className="flex items-center text-sm font-medium text-gray-600">
                <FaPen className="mr-2 text-gray-500" /> Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl"
              />
            </div>

            {/* Author Input */}
            <div className="w-full lg:w-1/2">
              <label className="flex items-center text-sm font-medium text-gray-600">
                <FaUser className="mr-2 text-gray-500" /> Written By
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl"
              />
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-600">
              <FaAlignLeft className="mr-2 text-gray-500" /> Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="4"
              className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl"
            ></textarea>
          </div>

          {/* Created At Input */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-600">
              <FaCalendarAlt className="mr-2 text-gray-500" /> Created At
            </label>
            <input
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              required
              className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl"
            />
          </div>

          {/* Image Upload Input */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-600">
              <FaImage className="mr-2 text-gray-500" /> Upload Images
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl"
            />
            {imagePreviews.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {imagePreviews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="max-h-32 rounded-xl shadow-lg"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-500 rounded-lg disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "Publishing..." : "Publish Blog"}
            </button>
            <Link to='/viewblog'>
            <button
              className="px-6 mt-4 py-3 text-white bg-blue-500 rounded-lg disabled:bg-gray-400"
            >
              View Blog
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;