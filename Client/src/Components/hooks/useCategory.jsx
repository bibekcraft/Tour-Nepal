import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from '../api/Category';

// Fetch all categories
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};

// Add category
export const useAddCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCategory,
    onSuccess: (newCategory) => {
      queryClient.setQueryData(['categories'], (oldCategories) =>
        oldCategories ? [...oldCategories, newCategory] : [newCategory]
      );
    },
    onError: (error) => {
      console.error('Error adding category:', error);
    },
  });
};

// Update category
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id, data) => updateCategory(id, data),
    onSuccess: (_, { id, data }) => {
      queryClient.setQueryData(['categories'], (oldCategories) =>
        oldCategories
          ? oldCategories.map((category) =>
              category.id === id ? { ...category, ...data } : category
            )
          : []
      );
    },
    onError: (error) => {
      console.error('Error updating category:', error);
    },
  });
};

// Delete category
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: (_, id) => {
      queryClient.setQueryData(['categories'], (oldCategories) =>
        oldCategories ? oldCategories.filter((category) => category.id !== id) : []
      );
    },
    onError: (error) => {
      console.error('Error deleting category:', error);
    },
  });
};
