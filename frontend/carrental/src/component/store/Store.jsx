import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../Slice/CategorySlice'; 
import itemsReducer from '../Slice/ItemSlice';
const store = configureStore({
  reducer: {
    categories: categoryReducer,
    items: itemsReducer, 
  },
});

export default store;
