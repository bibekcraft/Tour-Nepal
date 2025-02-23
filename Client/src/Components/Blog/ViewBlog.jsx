import { useState, useEffect } from "react";
import { FaPen, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useBlogs, useDeleteBlog, useUpdateBlog } from "../hooks/Blog";

const ViewBlog = () => {
  // Fetch blogs and hooks for delete/update
  const { data: blogs, isLoading, error } = useBlogs();
  const { mutate: deleteBlog } = useDeleteBlog();
  const { mutate: updateBlog } = useUpdateBlog();

  // State for editing a blog
  const [editFormData, setEditFormData] = useState({
    title: "",
    content: "",
    author: "",
    createdAt: "",
    images: [],
    existingImages: [],
  });

  const [editingBlogId, setEditingBlogId] = useState(null); // Track which blog is being edited
  const [imagePreviews, setImagePreviews] = useState([]); // For image previews during editing

  // Handle errors when fetching blogs
  useEffect(() => {
    if (error) toast.error("Failed to fetch blogs: " + error.message);
  }, [error]);

  // Handle click on "Edit" button
  const handleEditClick = (blog) => {
    setEditingBlogId(blog._id);
    setEditFormData({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      createdAt: blog.createdAt.split("T")[0],
      images: [],
      existingImages: blog.images || [],
    });
    setImagePreviews(blog.images || []);
  };

  // Handle canceling the edit mode
  const handleCancelEdit = () => {
    setEditingBlogId(null);
    setEditFormData({
      title: "",
      content: "",
      author: "",
      createdAt: "",
      images: [],
      existingImages: [],
    });
    setImagePreviews([]);
  };

  // Handle changes in the edit form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload during editing
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

  // Handle form submission for updating a blog
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (!editFormData.title.trim() || !editFormData.content.trim()) {
      toast.error("Title and content are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", editFormData.title);
    formData.append("content", editFormData.content);
    formData.append("author", editFormData.author);
    formData.append("createdAt", editFormData.createdAt);

    // Append existing and new images
    editFormData.existingImages.forEach((img) => formData.append("existingImages", img));
    editFormData.images.forEach((img) => formData.append("images", img));

    // Call the updateBlog mutation
    updateBlog(
      { id: editingBlogId, data: formData },
      {
        onSuccess: () => {
          toast.success("Blog updated successfully!");
          handleCancelEdit();
        },
        onError: (error) => {
          toast.error(`Error updating blog: ${error.message}`);
        },
      }
    );
  };

  // Handle deleting a blog
  const handleDelete = (id) => {
    deleteBlog({ id });
    toast.success("Blog deleted successfully!");
  };

  // Loading state
  if (isLoading) return <div>Loading blogs...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Manage Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((blog) => (
          <div key={blog._id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 line-clamp-3 mb-4">{blog.content}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleEditClick(blog)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <FaPen /> Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-red-600 hover:text-red-800 flex items-center gap-2"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Blog Modal */}
      {editingBlogId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white w-full max-w-lg rounded-xl p-8 relative"
          >
            <button
              type="button"
              onClick={handleCancelEdit}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Edit Blog</h2>

            <input
              type="text"
              name="title"
              value={editFormData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full p-3 mb-4 border rounded-lg"
            />

            <textarea
              name="content"
              value={editFormData.content}
              onChange={handleChange}
              placeholder="Content"
              rows={4}
              className="w-full p-3 mb-4 border rounded-lg"
            />

            <input
              type="date"
              name="createdAt"
              value={editFormData.createdAt}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded-lg"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              className="w-full p-3 mb-4 border rounded-lg"
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

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaSave /> Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewBlog;