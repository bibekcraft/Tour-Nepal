import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryItems = createAsyncThunk(
  'category/fetchCategoryItems', 
  async (categoryId) => { 
    if (!categoryId) {
      console.error('Category ID is missing');
      return [];
    }
    const response = await axios.get(`http://127.0.0.1:8000/trail-items/}`);
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
      })
      .addCase(fetchCategoryItems.rejected, (state, action) => {
        state.status = 'failed'; // Set failed state on fetch error
        state.error = action.error.message; // Capture error message
        console.error('Fetch error:', action.error.message); // Debug log for errors
      });
  },
});



// Selector to access the list of items (products)
export const selectCategoryItems = (state) => state.categoryItem.items;

// Selector to access the loading status
export const selectCategoryStatus = (state) => state.categoryItem.status;

// Selector to access any error messages
export const selectCategoryError = (state) => state.categoryItem.error;

export default categoryItemSlice.reducer;
