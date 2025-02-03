import { useState } from "react";
import useCategories from "../Category/useCategories";

const CategoryEdit = ({ category }) => {
  const { updateCategoryMutation } = useCategories();
  const [name, setName] = useState(category.name);
  const [image, setImage] = useState(category.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategoryMutation.mutate(
      { id: category.id, name, image },
      {
        onSuccess: () => {
          alert("Category updated successfully!");
        },
        onError: (error) => {
          console.error("Error updating category:", error);
          alert("Failed to update category. Please try again.");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <h2 className="text-xl font-semibold">Edit Category</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="p-2 border rounded w-full"
        />
      </div>
      <div>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL (optional)"
          className="p-2 border rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        {updateCategoryMutation.isLoading ? "Updating..." : "Update Category"}
      </button>
      {updateCategoryMutation.isError && (
        <p className="text-red-500">Error: {updateCategoryMutation.error.message}</p>
      )}
    </form>
  );
};

export default CategoryEdit;