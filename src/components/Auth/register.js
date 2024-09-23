import '../../input.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUsername, setEmail, setPassword, setAuthError, clearAuthError } from '../../store/authSlice';
import { auth, googleProvider, githubProvider, facebookProvider, signInWithPopup } from '../../firebaseConfig';

const UserRegistrationForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [authError, setLocalAuthError] = useState(null);

  // Validation for password strength
  const passwordValidation = {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long"
    },
    pattern: {
      value: /(?=.*[0-9])(?=.*[!@#$%^&*])/,
      message: "Password must contain at least one number and one special character"
    }
  };

  const onSubmit = async (data) => {
    dispatch(setUsername(data.username));
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    try {
      // Handle user registration logic here (e.g., Firebase signup)
      // Example: await auth.createUserWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      dispatch(setAuthError(error.message));
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      const errorMessage = error.code === 'auth/popup-closed-by-user'
        ? 'The popup was closed before completing the sign-in.'
        : error.message;
      dispatch(setAuthError(errorMessage));
      setLocalAuthError(errorMessage);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

      {authError && (
        <div className="text-red-500 text-center mb-4">
          <p>{authError}</p>
          <button
            onClick={() => dispatch(clearAuthError())}
            className="text-blue-500 underline"
          >
            Try Again
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            {...register('username', { required: 'Username is required' })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter your username"
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            {...register('password', passwordValidation)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Register
        </button>
      </form>

      {/* Social login buttons */}
      <div className="mt-6 text-center">
        <p className="mb-4">Or sign up with:</p>
        <button
          onClick={() => handleSocialLogin(googleProvider)}
          className="bg-red-500 text-white py-2 px-4 rounded-lg w-full mb-2 hover:bg-red-600"
        >
          Sign up with Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubProvider)}
          className="bg-gray-800 text-white py-2 px-4 rounded-lg w-full mb-2 hover:bg-gray-900"
        >
          Sign up with GitHub
        </button>
        <button
          onClick={() => handleSocialLogin(facebookProvider)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600"
        >
          Sign up with Facebook
        </button>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
