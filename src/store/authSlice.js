import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    username: '',
    authError: null,
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
    },
    setAuthError(state, action) {
      state.authError = action.payload;
    },
    clearAuthError(state) {
      state.authError = null;
    },
  },
});

export const { setEmail, setPassword, setUsername, setAuthError, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
