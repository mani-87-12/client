// src/components/LogoutButton.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3002/logout');
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Can't log out. Please try again.");
      }
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
