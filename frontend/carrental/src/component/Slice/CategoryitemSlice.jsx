import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a thunk for fetching items based on the category ID
export const fetchCategoryItems = createAsyncThunk(
  'category/fetchCategoryItems', // Action type
  async (categoryId) => { // Removed TypeScript annotation
    console.log(`Fetching items for category ID: ${categoryId}`); // Debug log
    const response = await axios.get(`http://127.0.0.1:8000/categories/${categoryId}/items/`);
    return response.data; // Return the fetched data
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
  reducers: {}, // No synchronous actions for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryItems.pending, (state) => {
        state.status = 'loading'; // Set loading state when the fetch starts
      })
      .addCase(fetchCategoryItems.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set succeeded state on successful fetch
        state.items = action.payload; // Update items with the fetched data
        console.log('Fetched items:', action.payload); // Debug log for fetched items
      })
      .addCase(fetchCategoryItems.rejected, (state, action) => {
        state.status = 'failed'; // Set failed state on fetch error
        state.error = action.error.message; // Capture error message
        console.error('Fetch error:', action.error.message); // Debug log for errors
      });
  },
});

// Export the reducer to be used in the store
export default categoryItemSlice.reducer;
