import axiosInstance from './Index';

// Fetch all blogs
export const fetchBlogs = async () => {
  const response = await axiosInstance.get('/blog/all');
  return response.data;
};

// Add a blog
export const addBlog = async (formData) => {
  const response = await axiosInstance.post('/blog/add', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Update a blog
export const updateBlog = async (blogId, updatedData) => {
  const response = await axiosInstance.put(`/blog/${blogId}`, updatedData);
  return response.data;
};

// Delete a blog
export const deleteBlog = async (id) => {
  const response = await axiosInstance.delete(`/blog/${id}`);
  return response.data;
};
