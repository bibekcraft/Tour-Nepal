// src/slices/CategoryItemSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  items: null,
  selectedItem: null,
  status: 'idle',
  error: null,
};

// Async thunk for fetching category items
export const fetchCategoryItems = createAsyncThunk(
  'categoryItems/fetchCategoryItems',
  async (categoryId) => {
    const response = await fetch(`http://127.0.0.1:8000/category-items/?category=${categoryId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category items');
    }
    const data = await response.json();
    return data;
  }
);

// Async thunk for fetching a single category item by ID
export const fetchCategoryItemById = createAsyncThunk(
  'categoryItems/fetchCategoryItemById',
  async (itemId) => {
    const response = await fetch(`http://127.0.0.1:8000/category-items/${itemId}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch category item');
    }
    const data = await response.json();
    return data;
  }
);

// Create the CategoryItemSlice
const CategoryItemSlice = createSlice({
  name: 'categoryItems',
  initialState,
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
        state.error = action.error.message || 'Failed to fetch category items';
      })
      .addCase(fetchCategoryItemById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryItemById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedItem = action.payload;
      })
      .addCase(fetchCategoryItemById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch category item';
      });
  },
});

export default CategoryItemSlice.reducer;
