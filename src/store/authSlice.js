// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    username: '',
    authError: null,
    isLoggedIn: false, // Add a property to track login status
  },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
      state.isLoggedIn = true; // Set login status to true
      state.authError = null; // Clear any authentication errors
    },
    setAuthError(state, action) {
      state.authError = action.payload;
    },
    clearAuthError(state) {
      state.authError = null;
    },
    logout(state) { // Add a logout action
      state.username = '';
      state.email = '';
      state.password = '';
      state.isLoggedIn = false; // Reset login status
      state.authError = null; // Clear authentication errors
    },
  },
});

export const { setEmail, setPassword, setUsername, setAuthError, clearAuthError, logout } = authSlice.actions;
export default authSlice.reducer;
