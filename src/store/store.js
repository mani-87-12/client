import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import postReducer from './postSlice';
import userReducer from './userSlice'; // Add userReducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer, // Add user slice
  },
});

export default store;
