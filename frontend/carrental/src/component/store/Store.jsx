import { configureStore } from '@reduxjs/toolkit';
import tourismReducer from '../slice/tourismSlice';

const store = configureStore({
  reducer: {
    tourism: tourismReducer,
  },
});

export default store;
