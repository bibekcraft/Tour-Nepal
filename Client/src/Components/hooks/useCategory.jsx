import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from '../api/Category';
const BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';
// Fetch all categories
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/categories/all/`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return response.json();
    },
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

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id, data) => updateCategory(id, data),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries(['categories']);
      const previousCategories = queryClient.getQueryData(['categories']);
      queryClient.setQueryData(['categories'], (oldCategories) =>
        oldCategories
          ? oldCategories.map((category) =>
              category.id === id ? { ...category, ...data } : category
            )
          : []
      );
      return { previousCategories };
    },
    onError: (error, { id }, context) => {
      console.error('Error updating category:', error);
      queryClient.setQueryData(['categories'], context.previousCategories);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['categories']);
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
