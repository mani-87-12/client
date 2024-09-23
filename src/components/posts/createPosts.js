// components/Posts/CreatePost.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  
  // Get username from Redux state
  const username = useSelector((state) => state.auth.username);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!content.trim()) {
      setError('Post content cannot be empty');
      return;
    }

    // Reset error
    setError('');

    // Handle post submission logic here, e.g., call an API to save the post
    console.log({
      username,
      content,
      image,
    });

    // Clear the form
    setContent('');
    setImage(null);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Text Input for Post Content */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Image Upload Button */}
        <div className="mt-4">
          <label className="block mb-1 font-semibold">Upload an Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
