import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../store/userSlice';

const FollowButton = ({ userId }) => {
  const dispatch = useDispatch();
  const followedUsers = useSelector((state) => state.user.followedUsers);

  const isFollowed = followedUsers.includes(userId);

  const handleFollowToggle = () => {
    if (isFollowed) {
      dispatch(unfollowUser(userId));
    } else {
      dispatch(followUser(userId));
    }
  };

  return (
    <button
      onClick={handleFollowToggle}
      className={`px-4 py-2 rounded text-white ${
        isFollowed ? 'bg-red-500' : 'bg-blue-500'
      }`}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
