import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  trails: [],
  trailDetails: null,
  isLoading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
    'tourism/fetchCategories',
    async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/categories/');
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        return res.json();
      } catch (error) {
        throw new Error(error.message || 'Failed to fetch categories');
      }
    }
  );
  
export const fetchTrails = createAsyncThunk(
  'tourism/fetchTrails',
  async (categoryId) => {
    const res = await fetch(`http://127.0.0.1:8000/trails/${categoryId}/`);
    return res.json();
  }
);

export const fetchTrailDetails = createAsyncThunk(
  'tourism/fetchTrailDetails',
  async (trailId) => {
    const res = await fetch(`http://127.0.0.1:8000/trail-items/${trailId}/`);
    return res.json();
  }
);

// Slice
const tourismSlice = createSlice({
  name: 'tourism',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to load categories.';
      })
      .addCase(fetchTrails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trails = action.payload;
      })
      .addCase(fetchTrails.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to load trails.';
      })
      .addCase(fetchTrailDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrailDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trailDetails = action.payload;
      })
      .addCase(fetchTrailDetails.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to load trail details.';
      });
  },
});

// Export the actions and the reducer
export default tourismSlice.reducer;
