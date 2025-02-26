// api/Category.js
import axiosInstance from './Index';

// Fetch all categories
export const fetchCategories = async () => {
  const response = await axiosInstance.get("/categories/all/");
  return response.data;
};

// Add a category
export const addCategory = async (data) => {
  const response = await axiosInstance.post("/categories/", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update a category
export const updateCategory = async (id, data) => {
  const response = await axiosInstance.put(`/categories/${id}/`, data);
  return response.data;
};

// Delete a category
export const deleteCategory = async (id) => {
  const response = await axiosInstance.delete(`/categories/${id}/`);
  return response.data;
};
