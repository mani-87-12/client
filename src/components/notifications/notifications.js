import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotifications } from '../../store/userSlice';

const NotificationList = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.user.notifications);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <button
          onClick={() => dispatch(clearNotifications())}
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          Clear All
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-600">You have no notifications.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification, index) => (
            <li key={index} className="py-4">
              <p className="text-gray-800">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
