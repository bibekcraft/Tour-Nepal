import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryItems = createAsyncThunk(
  'category/fetchCategoryItems',
  async (categoryId, { rejectWithValue }) => {
    if (!categoryId) {
      console.error('Category ID is missing');
      return rejectWithValue('Category ID is required.');
    }
    try {
      const response = await axios.get(`http://127.0.0.1:8000/trail-items/`, {
        params: { category: categoryId }, // Assuming the backend accepts category as a query parameter
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching category items:", error);
      return rejectWithValue(error.response?.data || 'Failed to fetch category items.');
    }
  }
);

const categoryItemSlice = createSlice({
  name: 'category',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategoryItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An error occurred';
      });
  },
});

export const selectCategoryItems = (state) => state.category.items;
  
export default categoryItemSlice.reducer;
