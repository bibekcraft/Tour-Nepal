import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch items by category ID
export const fetchItemsByCategory = createAsyncThunk('items/fetchItemsByCategory', async (categoryId) => {
  const response = await fetch(`http://127.0.0.1:8000/trail-items/?category=${categoryId}`);
  const data = await response.json();
  return data;
});

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItemsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch items';
      });
  },
});

export default itemSlice.reducer;
