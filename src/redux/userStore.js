// userStore.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '', // Initial state for username
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload; // Set the username
    },
    clearUsername(state) {
      state.username = ''; // Clear the username
    },
  },
});

// Export actions to use in components
export const { setUsername, clearUsername } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
