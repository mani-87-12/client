// components/Posts/PostList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment'; // For time formatting (optional)

const PostList = () => {
  const username = useSelector((state) => state.auth.username); // Get logged-in user from auth slice

  // Mock list of posts (replace this with posts from Redux or API)
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: 'This is the first post',
      author: 'JohnDoe',
      timestamp: new Date(),
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      content: 'Just posted my second update!',
      author: 'JaneSmith',
      timestamp: new Date(),
      likes: 2,
      comments: [],
    },
  ]);

  // Handle liking a post
  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Handle adding a comment (this could be expanded)
  const handleComment = (postId) => {
    alert(`Commenting on post with ID: ${postId}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
        >
          <p className="text-gray-800">{post.content}</p>
          <p className="text-sm text-gray-500 mt-2">
            By <span className="font-semibold">{post.author}</span> -{' '}
            {moment(post.timestamp).fromNow()}
          </p>
          <div className="mt-4 flex space-x-4">
            {/* Like Button */}
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600"
              onClick={() => handleLike(post.id)}
            >
              Like {post.likes > 0 && `(${post.likes})`}
            </button>

            {/* Comment Button */}
            <button
              className="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600"
              onClick={() => handleComment(post.id)}
            >
              Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
