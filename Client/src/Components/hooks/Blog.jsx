import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBlogs, addBlog, updateBlog, deleteBlog } from '../api/Blog';

export const useBlogs = () => {
  return useQuery({
   queryFn: async () => {
      const response = await fetch('/api/blogs');
      return response.json();
    },
  });
};
export const useBlog = (id) => {
  return useQuery(['blog', id], () => fetchBlogs(id), {
    enabled: !!id,  // Only run the query if id exists
  });
};

export const useAddBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBlog, 
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']); // Invalidate the 'blogs' query to refetch updated data
    },
    onError: (error) => {
      console.error('Error adding blog:', error);
    }
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateBlog, 
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']); 
    },
    onError: (error) => {
      console.error('Error updating blog:', error);
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlog, 
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']);
    },
    onError: (error) => {
      console.error('Error deleting blog:', error);
    },
  });
};
