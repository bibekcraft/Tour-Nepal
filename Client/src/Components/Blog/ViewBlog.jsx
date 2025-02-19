import { useState, useEffect } from "react";
import { FaPen, FaTrash, FaImage } from "react-icons/fa";
import { toast } from "react-toastify";
import { useBlog, useDeleteBlog, useUpdateBlog } from "../hooks/Blog"; // Ensure these hooks exist

const ViewBlog = () => {
  const { data: blogs, isLoading, error } = useBlog();
  const { mutate: deleteBlog } = useDeleteBlog();
  const { mutate: updateBlog } = useUpdateBlog();

  const [editFormData, setEditFormData] = useState({
    title: "",
    content: "",
    author: "",
    createdAt: "",
    images: [],
  });

  const [editingBlogId, setEditingBlogId] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  // Handle error fetching blogs
  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch blogs: " + error.message);
    }
  }, [error]);

  const handleEditClick = (blog) => {
    setEditingBlogId(blog.id);
    setEditFormData({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      createdAt: blog.createdAt,
      images: blog.images,
    });
    setImagePreviews(blog.images);
  };

  const handleCancelEdit = () => {
    setEditingBlogId(null);
    setEditFormData({
      title: "",
      content: "",
      author: "",
      createdAt: "",
      images: [],
    });
    setImagePreviews([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024); // 5MB limit

    if (validFiles.length < files.length) {
      toast.error("Some files exceeded the 5MB limit.");
    }

    setEditFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...validFiles],
    }));

    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (!editFormData.title.trim() || !editFormData.content.trim() || !editFormData.author.trim()) {
      toast.error("All fields are required.");
      return;
    }

    const submitData = new FormData();
    Object.entries(editFormData).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((img) => submitData.append("images", img));
      } else {
        submitData.append(key, value);
      }
    });

    updateBlog({ id: editingBlogId, data: submitData }, {
      onSuccess: () => {
        toast.success("Blog updated successfully!");
        handleCancelEdit();
      },
      onError: (error) => {
        toast.error("Failed to update blog: " + error.message);
      },
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(id, {
        onSuccess: () => {
          toast.success("Blog deleted successfully!");
        },
        onError: (err) => {
          toast.error("Failed to delete blog: " + err.message);
        },
      });
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl px-6 py-12 mx-auto bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Manage Blogs</h2>

      <div className="space-y-6">
        {blogs?.map((blog) => (
          <div key={blog.id} className="p-6 bg-white rounded-xl shadow-lg">
            {editingBlogId === blog.id ? (
              <form onSubmit={handleUpdateSubmit} className="space-y-6">
                {/* Title and Author */}
                <div className="flex flex-col lg:flex-row lg:space-x-6">
                  <div className="w-full lg:w-1/2">
                    <label className="flex items-center text-sm font-medium text-gray-600">
                      <FaPen className="mr-2 text-gray-500" /> Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={editFormData.title}
                      onChange={handleChange}
                      required
                      className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      aria-label="Blog Title"
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <label className="flex items-center text-sm font-medium text-gray-600">
                      <FaPen className="mr-2 text-gray-500" /> Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={editFormData.author}
                      onChange={handleChange}
                      required
                      className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      aria-label="Author"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-600">
                    <FaPen className="mr-2 text-gray-500" /> Content
                  </label>
                  <textarea
                    name="content"
                    value={editFormData.content}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Blog Content"
                  ></textarea>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-600">
                    <FaImage className="mr-2 text-gray-500" /> Upload Images
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    multiple
                    className="block w-full px-5 py-4 mt-2 text-xl border border-gray-300 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Upload Images"
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

                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700"
                  >
                    Update Blog
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <h3 className="text-2xl font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.content.slice(0, 100)}...</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEditClick(blog)}
                    className="text-indigo-600 flex items-center"
                  >
                    <FaPen className="mr-2" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 flex items-center"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlog;
