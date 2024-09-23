import React from 'react';
import { useSelector } from 'react-redux';
import FollowButton from './followButton'; // Import FollowButton

const UserProfile = ({ userId }) => {
  const { email, username } = useSelector((state) => state.auth);
  const followers = useSelector((state) => state.user.followedUsers); // Assuming followedUsers are the followers
  const posts = useSelector((state) => state.post.posts); // Assuming posts are stored in postSlice

  // Filter posts based on the userId
  const userPosts = posts.filter((post) => post.authorId === userId);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-center mb-6">
        {/* Profile Picture */}
        <div className="relative w-32 h-32">
          <img
            src="https://via.placeholder.com/150" // Placeholder for profile picture
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      {/* Personal Information */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{username || 'John Doe'}</h2>
        <p className="text-sm text-gray-600 mb-4">{email}</p>
        {/* Bio */}
        <p className="text-gray-700">This is a sample bio. You can edit your bio by clicking the edit button.</p>
      </div>

      {/* Follow Button */}
      <div className="mt-6 flex justify-center">
        <FollowButton userId={userId} />
      </div>

      {/* Followers Count and List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Followers ({followers.length})</h3>
        <ul className="list-disc pl-5">
          {followers.map((follower) => (
            <li key={follower.id}>{follower.username}</li>
          ))}
        </ul>
      </div>

      {/* User Posts */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Posts</h3>
        <div className="space-y-4">
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="font-bold">{post.authorName}</p>
                <p>{post.content}</p>
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>{post.likes} Likes</span>
                  <span>{post.comments.length} Comments</span>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
