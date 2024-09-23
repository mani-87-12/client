import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost, setCurrentPost } from '../../store/postSlice'; // Adjust the path
import { useNavigate } from 'react-router-dom';

const EditPost = ({ postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentPost = useSelector(state => state.posts.currentPost); // Fetch post for editing
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  // Load current post details for editing
  useEffect(() => {
    if (currentPost) {
      setText(currentPost.text || '');
      setImage(currentPost.image || null);
    }
  }, [currentPost]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: currentPost.id,
      text,
      image, // Handle image upload logic separately
    };

    dispatch(updatePost(updatedPost)); // Update post in Redux store
    navigate('/posts'); // Redirect to posts list
  };

  if (!currentPost) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">Post Content</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Post Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-500"
          />
          {image && <img src={URL.createObjectURL(image)} alt="Preview" className="mt-2 h-32 w-32 object-cover" />}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
