import { useState } from "react";
import { FaPen, FaUser, FaImage, FaCalendarAlt, FaAlignLeft } from "react-icons/fa";

const Blog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    author: "",
    date: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      title: "",
      description: "",
      image: null,
      author: "",
      date: "",
    });
    setImagePreview(null);
  };

  return (
    <div>
      <div className="max-w-4xl px-6 py-12 mx-auto bg-gray-50">
        <div className="relative p-10 overflow-hidden bg-white shadow-lg rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-48 bg-gray-200 -z-10"></div>

          <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Write Your Blog</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

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
                  className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-600">
                <FaAlignLeft className="mr-2 text-gray-500" /> Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-600">
                <FaImage className="mr-2 text-gray-500" /> Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
                className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-4 rounded-xl shadow-lg max-h-64" />
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-600">
                <FaCalendarAlt className="mr-2 text-gray-500" /> Date Written
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-lg font-semibold text-white bg-indigo-600 shadow-md rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Publish Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
