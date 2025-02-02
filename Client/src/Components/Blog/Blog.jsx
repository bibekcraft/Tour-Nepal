import { useState } from "react";
import { FaPen, FaUser, FaImage, FaCalendarAlt, FaAlignLeft } from "react-icons/fa"; // Icons for the form fields
import Navbar from "../navbar/Navbar";
import Footer from "../navbar/Footer";

const Blog = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
    date: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data on submit (you can replace this with actual blog saving logic)
    console.log(formData);

    // Reset form inputs
    setFormData({
      title: "",
      description: "",
      image: "",
      author: "",
      date: "",
    });
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl px-6 py-12 mx-auto bg-gray-50">
        <div className="relative p-10 overflow-hidden bg-white shadow-lg rounded-3xl">
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-48 bg-gray-200 -z-10"></div>

          <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Write Your Blog</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <div className="w-full lg:w-1/2">
                <label className="flex items-center block text-sm font-medium text-gray-600">
                  <FaPen className="mr-2 text-gray-500" />
                  Title
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
                <label className="flex items-center block text-sm font-medium text-gray-600">
                  <FaUser className="mr-2 text-gray-500" />
                  Written By
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
              <label className="flex items-center block text-sm font-medium text-gray-600">
                <FaAlignLeft className="mr-2 text-gray-500" />
                Description
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
              <label className="flex items-center block text-sm font-medium text-gray-600">
                <FaImage className="mr-2 text-gray-500" />
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="flex items-center block text-sm font-medium text-gray-600">
                <FaCalendarAlt className="mr-2 text-gray-500" />
                Date Written
              </label>
              <input
                type="text"
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
      
      <Footer />
    </div>
  );
};

export default Blog;
