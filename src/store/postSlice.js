import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [], // Stores all posts
    currentPost: null, // For editing the selected post
    searchResults: [],
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setCurrentPost(state, action) {
      state.currentPost = action.payload;
    },
    updatePost(state, action) {
      const updatedPost = action.payload;
      state.posts = state.posts.map(post =>
        post.id === updatedPost.id ? updatedPost : post
      );
    },
    searchPosts(state, action) {
      const query = action.payload.toLowerCase();
      state.searchResults = state.posts.filter(post =>
        post.content.toLowerCase().includes(query)
      );
    },
  },
});

export const { setPosts, setCurrentPost, updatePost, searchPosts } = postSlice.actions;
export default postSlice.reducer;
