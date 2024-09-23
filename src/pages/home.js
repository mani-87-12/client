import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../components/search/searchBar';
import NotificationList from '../components/notifications/notifications';
import UserProfile from '../components/profile/userProfile';

const Home = () => {
  const { posts } = useSelector((state) => state.post);
  const { username } = useSelector((state) => state.auth);
  const [profileVisible, setProfileVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  // Mock userId for demo purposes
  const userId = 'mockUserId123';

  const toggleProfileVisibility = () => {
    setProfileVisible(!profileVisible);
  };

  const toggleNotificationsVisibility = () => {
    setNotificationsVisible(!notificationsVisible);
  };

  // Close notifications dropdown when clicking outside
  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="p-4">
      {/* Top Bar */}
      <div className="flex items-center justify-center mb-4 space-x-4">
        {/* Profile Button */}
        <button
          onClick={toggleProfileVisibility}
          className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300"
        >
          <img
            src="https://via.placeholder.com/50" // Placeholder for profile picture
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Search Bar */}
        <div className="flex-grow max-w-lg">
          <SearchBar />
        </div>

        {/* Notifications Button */}
        <button
          onClick={toggleNotificationsVisibility}
          className="relative w-12 h-12 rounded-full border-2 border-gray-300"
        >
          <img
            src="https://via.placeholder.com/30" // Placeholder for notification icon
            alt="Notifications"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Notifications Dropdown */}
        {notificationsVisible && (
          <div
            ref={notificationsRef}
            className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-80 p-4 z-10"
          >
            <NotificationList />
          </div>
        )}
      </div>

      {/* Feed of Posts */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Feed</h2>
        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <img
                    src={post.authorProfilePic || 'https://via.placeholder.com/40'} // Placeholder for author profile picture
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover mr-2"
                  />
                  <span className="font-bold">{post.authorName}</span>
                </div>
                <p className="mb-2">{post.content}</p>
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>{post.likes} Likes</span>
                  <span>{post.comments.length} Comments</span>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>

      {/* User Profile Display */}
      {profileVisible && <UserProfile userId={userId} />}
    </div>
  );
};

export default Home;
