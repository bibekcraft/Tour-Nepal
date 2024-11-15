import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for category and trails
const initialState = {
  categories: {
    data: null,
    status: 'idle',
    error: null,
  },
  trails: {
    data: null,
    status: 'idle',
    error: null,
  },
};

// Fetch categories
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch('http://127.0.0.1:8000/categories/');
  const data = await response.json();
  return data;
});

// Fetch trails by category ID
export const fetchTrails = createAsyncThunk('trails/fetchTrails', async (categoryId) => {
  const response = await fetch(`http://127.0.0.1:8000/categories/${categoryId}/items/`);
  const data = await response.json();
  return data;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle category fetching
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categories.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.status = 'succeeded';
        state.categories.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categories.status = 'failed';
        state.categories.error = action.error.message || 'Failed to fetch categories';
      });

    // Handle trail fetching
    builder
      .addCase(fetchTrails.pending, (state) => {
        state.trails.status = 'loading';
      })
      .addCase(fetchTrails.fulfilled, (state, action) => {
        state.trails.status = 'succeeded';
        state.trails.data = action.payload;
      })
      .addCase(fetchTrails.rejected, (state, action) => {
        state.trails.status = 'failed';
        state.trails.error = action.error.message || 'Failed to fetch trails';
      });
  },
});

export default categorySlice.reducer;
