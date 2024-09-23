import React, { useState } from 'react';
import LoginForm from './login';
import RegisterForm from './register';

const AuthForms = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg">
        <div className="w-1/2 p-6">
          {showLogin ? <LoginForm /> : <RegisterForm />}
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center p-6 border-l border-gray-200">
          <h1 className="text-2xl font-bold mb-4">
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
  );
};

export default AuthForms;
