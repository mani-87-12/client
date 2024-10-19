// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userStore'; // Import user slice

const store = configureStore({
  reducer: {
    user: userReducer, // Add the user reducer
  },
});

export default store;
