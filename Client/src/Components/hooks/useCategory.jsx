import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from '../api/Category';

// Fetch all categories
export const useCategories = () => {
  return useQuery(['categories'], fetchCategories);
};

// Add category
export const useAddCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(addCategory, {
    onSuccess: () => queryClient.invalidateQueries(['categories']),
  });
};

// Update category
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, data }) => updateCategory(id, data), {
    onSuccess: () => queryClient.invalidateQueries(['categories']),
  });
};

// Delete category
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteCategory, {
    onSuccess: () => queryClient.invalidateQueries(['categories']),
  });
};
