import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryItems = createAsyncThunk(
  'category/fetchCategoryItems', 
  async (categoryId) => { 
    console.log(`Fetching items for category ID: ${categoryId}`); 
    const response = await axios.get(`http://127.0.0.1:8000/categories/${categoryId}/items`);
    return response.data; 
  }
);

// Create a slice for category items
const categoryItemSlice = createSlice({
  name: 'categoryItem', // Name of the slice
  initialState: {
    items: [], // Store the items fetched from the API
    status: 'idle', // Represents the state of the async operation
    error: null, // Store any error messages
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
        console.log('Fetched items:', action.payload); 
      })
      .addCase(fetchCategoryItems.rejected, (state, action) => {
        state.status = 'failed'; // Set failed state on fetch error
        state.error = action.error.message; // Capture error message
        console.error('Fetch error:', action.error.message); // Debug log for errors
      });
  },
});

export default categoryItemSlice.reducer;
