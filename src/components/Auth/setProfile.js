import React, { useState, useRef } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa'; // Import the calendar icon

const FormComponent = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleClear = () => {
    setUsername('');
    setBio('');
    setDob('');
    setFeedback('');
    setMessage(''); // Clear any previous messages
  };

  const handlePost = () => {
    if (username && bio && dob && feedback) {
      setMessage('Successfully posted!'); // Set success message
    } else {
      setMessage('Please fill in all fields.'); // Optionally, handle incomplete forms
    }
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === 'Enter' && nextRef) {
      e.preventDefault(); // Prevent default form submission
      nextRef.current.focus(); // Focus the next input
    }
  };

  const bioRef = useRef();
  const dobRef = useRef();
  const feedbackRef = useRef();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"> {/* Reduced padding */}
        {/* Success Message */}
        {message && (
          <div className="mb-4 text-center text-white font-bold">
            {message}
          </div>
        )}

        {/* Username Input */}
        <div className="flex justify-center mb-4">
          <div className="w-full">
            <input
              id="username"
              type="text"
              placeholder={isFocused ? '' : 'Username'}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full text-center px-4 py-2 text-xl bg-transparent border-b border-gray-200 text-white focus:outline-none focus:border-green-400 placeholder-white transition-all duration-300 ${
                isFocused ? '' : 'text-opacity-50'
              }`}
              style={{ backgroundColor: 'transparent' }}
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => setIsFocused(e.target.value !== '')}
              onKeyDown={(e) => handleKeyDown(e, bioRef)} // Handle Enter key
            />
          </div>
        </div>

        {/* Image Upload (Circular Container) */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 rounded-full bg-white bg-opacity-20 border-2 border-dashed border-white flex justify-center items-center">
            <label className="text-white cursor-pointer">
              <input type="file" className="hidden" />
              Upload Image
            </label>
          </div>
        </div>

        {/* Bio Text Box */}
        <div className="mb-4">
          <label className="block text-white text-lg mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            ref={bioRef}
            placeholder="Write your bio here..."
            rows="2"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-4 py-2 text-lg bg-transparent border-b border-gray-200 text-white placeholder-white focus:outline-none focus:border-green-400"
            onKeyDown={(e) => handleKeyDown(e, dobRef)} // Handle Enter key
          />
        </div>

        {/* Date of Birth Box with New Calendar Icon */}
        <div className="mb-4 relative">
          <label className="block text-white text-lg mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <input
            id="dob"
            ref={dobRef}
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-4 py-2 text-lg bg-transparent border-b border-gray-200 text-white placeholder-white focus:outline-none focus:border-green-400"
            onKeyDown={(e) => handleKeyDown(e, feedbackRef)} // Handle Enter key
          />
          <FaRegCalendarAlt className="absolute right-2 top-10 text-white" />
        </div>

        {/* Feedback Box with File Upload */}
        <div className="mb-4">
          <label className="block text-white text-lg mb-2" htmlFor="feedback">
            Feedback
          </label>
          <div className="relative">
            <textarea
              id="feedback"
              ref={feedbackRef}
              placeholder="Enter your feedback here..."
              rows="2"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-4 py-2 text-lg bg-transparent border-b border-gray-200 text-white placeholder-white focus:outline-none focus:border-green-400"
            />
            <input type="file" id="file-upload" className="hidden" />
            <button
              className="absolute right-4 bottom-2 bg-blue-500 text-white text-sm font-bold py-1 px-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => document.getElementById('file-upload').click()} // Trigger file input click
            >
              Choose File
            </button>
          </div>
        </div>

        {/* Buttons (Post and Clear) */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePost}
            className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Post
          </button>
          <button
            onClick={handleClear}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;