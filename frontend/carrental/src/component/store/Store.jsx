// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../Slice/CategorySlice'; // Ensure the correct path to the CategorySlice\
import categoryItemReducer from '../Slice/CategoryitemSlice'; // Ensure the correct path to the CategoryItemSlice

// Configure the store
const store = configureStore({
  reducer: {
    categories: categoryReducer, // Register the CategorySlice reducer
    categoryItems: categoryItemReducer, // Add your new slice to the store
  },
});

export default store;
