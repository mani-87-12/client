import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    followedUsers: [], // List of user IDs that the current user follows
    notifications: [], // List of notifications
    searchResults: {
        users: [],
        posts: [],
      },
  },
  reducers: {
    followUser(state, action) {
      state.followedUsers.push(action.payload);
      // Add a follow notification
      state.notifications.push({
        type: 'follow',
        message: `You followed user with ID ${action.payload}`,
        time: new Date().toLocaleString(),
      });
    },
    unfollowUser(state, action) {
      state.followedUsers = state.followedUsers.filter(
        (userId) => userId !== action.payload
      );
      // Add an unfollow notification
      state.notifications.push({
        type: 'unfollow',
        message: `You unfollowed user with ID ${action.payload}`,
        time: new Date().toLocaleString(),
      });
    },
    clearNotifications(state) {
      state.notifications = [];
    },
    searchUsers(state, action) {
        const query = action.payload.toLowerCase();
        state.searchResults.users = state.followedUsers.filter(user =>
          user.username.toLowerCase().includes(query)
        );
    },
  },
});

export const { followUser, unfollowUser, clearNotifications, searchUsers } = userSlice.actions;
export default userSlice.reducer;
