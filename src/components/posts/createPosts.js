import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for submission
  const [preview, setPreview] = useState(null); // For image preview

  // Get username from Redux state
  const username = useSelector((state) => state.auth.username);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
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
    setLoading(true); // Start loading

    // Handle post submission logic here (e.g., API call)
    console.log({
      username,
      content,
      image,
    });

    // Simulate an API call delay
    setTimeout(() => {
      setLoading(false); // End loading
      // Clear the form
      setContent('');
      setImage(null);
      setPreview(null);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
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

          {/* Image Preview */}
          {preview && (
            <div className="mt-4">
              <label className="block mb-1 font-semibold">Image Preview:</label>
              <img src={preview} alt="Preview" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`mt-4 w-full py-2 rounded-md transition-colors ${
              loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
