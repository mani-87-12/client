import React, { useState } from 'react';
import { FaHeart, FaShare } from 'react-icons/fa';

const UserProfile = () => {
  const [bio, setBio] = useState('Loves coding and exploring new technologies.');
  const [profileName, setProfileName] = useState('John Doe');
  const [editMode, setEditMode] = useState(false);
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150');
  const [followers, setFollowers] = useState([
    'Jane Smith',
    'User123',
    'Chris Evans',
    'Scarlett Johansson',
    'Bruce Wayne',
    'Peter Parker',
  ]);
  const [posts, setPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [newPostText, setNewPostText] = useState('');
  const [postImage, setPostImage] = useState(null); // Use null for better check
  const [postImageName, setPostImageName] = useState(''); // Store the image name instead of preview

  const handleEdit = () => setEditMode(true);
  const handleSave = () => setEditMode(false);
  const handleCancel = () => setEditMode(false);

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePicture(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemoveProfilePicture = () => {
    setProfilePicture('https://via.placeholder.com/150');
  };

  const handleUnfollow = (follower) => {
    setFollowers(followers.filter((item) => item !== follower));
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('New password and confirm password do not match.');
      return;
    }

    setMessage('Password has been successfully changed.');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowPasswordPopup(false);
  };

  const closePasswordPopup = () => {
    setShowPasswordPopup(false);
    setMessage('');
  };

  const handleCreatePost = () => {
    if (!newPostText) return; // Prevent empty posts

    setPosts([
      {
        text: newPostText,
        image: postImage,
        likes: 0,
        comments: [],
      },
      ...posts,
    ]);
    setNewPostText('');
    setPostImage(null); // Reset post image
    setPostImageName(''); // Reset post image name
    setShowCreatePost(false);
  };

  const handlePostImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPostImage(e.target.files[0]); // Store the image file
      setPostImageName(e.target.files[0].name); // Store the name of the image
    }
  };

  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  const handleSharePost = (index) => {
    console.log(`Post shared: ${posts[index].text}`);
  };

  const handleAddComment = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-5/6 lg:w-2/3">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4">
          <div className="text-lg font-bold">
            <h1>{profileName}</h1>
          </div>
          <div className="space-x-4">
            <a href="http://localhost:3000/home">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Home</button></a>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" onClick={() => setShowPasswordPopup(true)}>Edit</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
          </div>
        </header>

        {/* Profile Picture and Edit Button */}
        <div className="flex flex-col items-start">
          <div className="relative">
            <img src={profilePicture} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
            <div className="mt-4 space-x-2">
              <label className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 cursor-pointer">
                Update Picture
                <input type="file" className="hidden" accept="image/*" onChange={handleProfilePictureChange} />
              </label>
              <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600" onClick={handleRemoveProfilePicture}>
                Remove Picture
              </button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-6 w-full">
            <label className="block text-lg font-bold mb-2">BIO:</label>
            {editMode ? (
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            ) : (
              <p>{bio}</p>
            )}
          </div>

          {/* Edit/Save/Cancel Buttons */}
          <div className="mt-4">
            {editMode ? (
              <>
                <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">Save</button>
                <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
              </>
            ) : (
              <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Edit Profile</button>
            )}
          </div>

          {/* Followers Section */}
          <div className="mt-6 w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-2">Followers: {followers.length}</h2>
            </div>
            <div className="h-32 overflow-y-scroll border border-gray-300 rounded-lg p-3 bg-white shadow-lg">
              {followers.map((follower, index) => (
                <div key={index} className="flex justify-between items-center py-1 border-b last:border-none">
                  <p className="text-sm">{follower}</p>
                  <button className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600" onClick={() => handleUnfollow(follower)}>
                    Unfollow
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Posts Section */}
          <div className="mt-6 w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Posts</h2>
              <button onClick={() => setShowCreatePost(true)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Create Post
              </button>
            </div>

            {/* Posts List */}
            <div className="grid grid-cols-2 gap-4">
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <div key={index} className="border p-2 rounded shadow-sm w-40 h-auto"> {/* Smaller container */}
                    <p className="text-sm">{post.text}</p>
                    {post.image && (
                      <img
                        src={URL.createObjectURL(post.image)}
                        alt="Post"
                        className="w-full h-32 object-cover mt-2 rounded" // Ensure the image fits well within the container
                      />
                    )}
                    <div className="flex justify-between mt-2">
                      <button onClick={() => handleLikePost(index)} className="flex items-center mr-2">
                        <FaHeart className="text-red-500 mr-1" /> {post.likes}
                      </button>
                      <button onClick={() => handleSharePost(index)} className="flex items-center">
                        <FaShare className="text-blue-500 mr-1" /> Share
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No posts yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Create Post Modal */}
        {showCreatePost && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
              <h2 className="text-lg font-bold mb-4">Create a New Post</h2>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
                rows="4"
                placeholder="What's on your mind?"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
              />
              <input type="file" accept="image/*" onChange={handlePostImageChange} />
              {postImageName && <p className="mt-2">Selected Image: {postImageName}</p>}
              <div className="mt-4 flex justify-end">
                <button onClick={handleCreatePost} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">Post</button>
                <button onClick={() => setShowCreatePost(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Change Password Popup */}
        {showPasswordPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-lg font-bold mb-4">Change Password</h2>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {message && <p className="text-red-500 mb-4">{message}</p>}
              <div className="flex justify-end">
                <button onClick={handleChangePassword} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">Save</button>
                <button onClick={closePasswordPopup} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
