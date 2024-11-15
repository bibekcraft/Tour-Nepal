import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItemsByCategory = createAsyncThunk(
  'items/fetchItemsByCategory',
  async (categoryId) => {
    const response = await fetch(`http://127.0.0.1:8000/categories/${categoryId}/items/`);
    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }
    return await response.json();
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: 'idle', 
    error: null,
  },
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
        state.error = action.error.message;
      });
  },
});

export default itemsSlice.reducer;
