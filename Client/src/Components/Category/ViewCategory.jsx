import { useCategories, useDeleteCategory, useUpdateCategory } from "../hooks/useCategory";
import { useState } from "react";
import toast from "react-hot-toast";

const ViewCategory = () => {
  const { data: categories, isLoading, isError } = useCategories();
  const deleteCategoryMutation = useDeleteCategory();
  const updateCategoryMutation = useUpdateCategory();
  const [editCategoryId, setEditCategoryId] = useState(null); // Track category being edited
  const [editName, setEditName] = useState(""); // Track edited name

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategoryMutation.mutate(id, {
        onSuccess: () => toast.success("✅ Category deleted successfully!"),
        onError: () => toast.error("❌ Failed to delete category."),
      });
    }
  };

  // Start editing a category
  const handleEditStart = (category) => {
    setEditCategoryId(category.id);
    setEditName(category.name);
  };

  // Handle update
  const handleUpdate = (id) => {
    if (!editName.trim()) {
      toast.error("⚠️ Category name cannot be empty!");
      return;
    }

    updateCategoryMutation.mutate(
      { id, data: { name: editName } },
      {
        onSuccess: () => {
          toast.success("✅ Category updated successfully!");
          setEditCategoryId(null); // Exit edit mode
        },
        onError: () => toast.error("❌ Failed to update category."),
      }
    );
  };

  if (isLoading) {
    return <p className="text-center text-gray-700">Loading categories...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load categories</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories?.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={category.image ? `http://127.0.0.1:8000/${category.image}` : 'https://via.placeholder.com/300'} 
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                {editCategoryId === category.id ? (
                  <>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring focus:ring-blue-300"
                      placeholder="Edit category name"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdate(category.id)}
                        className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                        disabled={updateCategoryMutation.isLoading}
                      >
                        {updateCategoryMutation.isLoading ? "Saving..." : "Save"}
                      </button>
                      <button
                        onClick={() => setEditCategoryId(null)}
                        className="flex-1 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Discover amazing places in this category.
                    </p>
                    <div className="flex gap-2 mt-4">
                      <button
                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        Explore
                      </button>
                      <button
                        onClick={() => handleEditStart(category)}
                        className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                        disabled={deleteCategoryMutation.isLoading}
                      >
                        {deleteCategoryMutation.isLoading && deleteCategoryMutation.variables === category.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;