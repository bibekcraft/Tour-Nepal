import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Fetch Categories function
const fetchCategories = async () => {
  const response = await axios.get("http://localhost:5000/api/categories");
  return response.data;
};

const addCategory = async (category) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/categories/add",
        category,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding category:", error);
      throw new Error("Failed to add category");
    }
  };
  
// Update Category function
const updateCategory = async ({ id, name, image }) => {
  const response = await axios.put(`http://localhost:5000/api/categories/${id}`,g { name, image });
  return response.data;
};

// Delete Category function
const deleteCategory = async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/categories/${id}`);
  return response.data;
};

// Custom hook for managing categories
export const useCategories = () => {
  const queryClient = useQueryClient();

  // Fetch categories using React Query's useQuery hook
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"], // Cache key for the query
    queryFn: fetchCategories,
  });

  // Mutation hooks
  const addCategoryMutation = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      toast.success("Category added successfully!");
    },
    onError: (error) => {
      console.error("Error:", error);
      toast.error(error.message || "Failed to add category.");
    },
  });
  

  const updateCategoryMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]); // Invalidate and refetch the categories after updating
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]); // Invalidate and refetch the categories after deleting
    },
  });

  return {
    categories,
    isLoading,
    isError,
    error,
    addCategoryMutation,
    updateCategoryMutation,
    deleteCategoryMutation,
  };
};

export default useCategories;