import axiosInstance from "./Index";

export const fetchCategories = async () => {
  const response = await axiosInstance.get("/categories/all");
  return response.data;
};

export const addCategory = async (data) => {
  const response = await axiosInstance.post("/categories", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateCategory = async (id, data) => {
  const response = await axiosInstance.put(`/categories/${id}`, data);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axiosInstance.delete(`/categories/${id}`);
  return response.data;
};
