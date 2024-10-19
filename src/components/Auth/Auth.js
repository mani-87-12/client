import React, { useState } from 'react';
import LoginForm from './login';
import RegisterForm from './register';

const AuthForms = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg">
        {/* Left side: Login/Register Form */}
        <div className="w-1/2 p-6">
          {showLogin ? <LoginForm /> : <RegisterForm />}
        </div>

        {/* Right side: Image and Switch to Register/Login */}
        <div className="w-1/2 flex flex-col justify-center items-center p-6 border-l border-gray-200">
          {/* Add random image */}
          <img
            src="https://via.placeholder.com/300" // Replace with any image URL
            alt="Auth Image"
            className="mb-6 w-full h-40 object-cover rounded-lg"
          />
          
          {/* Text and Switch button */}
          <div className="mt-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 text-center">
              {showLogin ? 'Need an Account?' : 'Already Have an Account?'}
            </h1>
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
            >
              {showLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;