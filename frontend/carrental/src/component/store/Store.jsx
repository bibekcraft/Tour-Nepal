// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../Slice/CategorySlice'; // Ensure the correct path to the CategorySlice

// Configure the store
const store = configureStore({
  reducer: {
    categories: categoryReducer, // Register the CategorySlice reducer
  },
});

export default store;
