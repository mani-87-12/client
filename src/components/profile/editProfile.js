import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setEmail } from '../../store/authSlice'; // Adjust the path accordingly

const EditProfile = () => {
  const dispatch = useDispatch();
  const { username, email } = useSelector((state) => state.auth);

  const [profilePic, setProfilePic] = useState(null);
  const [bio, setBio] = useState("This is a sample bio.");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = () => {
    // Handle saving username, email, and profile picture logic (e.g., update to Firebase or backend)
    dispatch(setUsername(username));
    dispatch(setEmail(email));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-center mb-6">
        {/* Profile Picture */}
        <div className="relative w-32 h-32">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
          <input
            type="file"
            onChange={handleProfilePicChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
            title="Edit Profile Picture"
          />
        </div>
      </div>

      {/* Edit Bio */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="3"
        />
      </div>

      {/* Edit Personal Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleSaveChanges}
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
