import '../../input.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUsername, setEmail, setPassword, setAuthError, clearAuthError } from '../../store/authSlice';
import { auth, googleProvider, githubProvider, facebookProvider, signInWithPopup } from '../../firebaseConfig';
import { AiFillGoogleCircle } from 'react-icons/ai'; // Google icon
import { AiFillGithub } from 'react-icons/ai'; // GitHub icon
import { FaFacebookF } from 'react-icons/fa'; // Facebook icon

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
      value: /(?=.[0-9])(?=.[!@#$%^&*])/,
      message: "Password must contain at least one number and one special character"
    }
  };

  const onSubmit = async (data) => {
    dispatch(setUsername(data.username));
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    // Handle user registration logic here (e.g., Firebase signup)
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

        {/* Gender Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Gender</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                {...register('gender', { required: 'Gender is required' })}
                type="radio"
                value="male"
                className="mr-1"
              />
              Male
            </label>
            <label className="mr-4">
              <input
                {...register('gender')}
                type="radio"
                value="female"
                className="mr-1"
              />
              Female
            </label>
            <label>
              <input
                {...register('gender')}
                type="radio"
                value="other"
                className="mr-1"
              />
              Other
            </label>
          </div>
          {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <div className="flex items-center">
            {/* Country Code Dropdown */}
            <select
              {...register('countryCode', { required: 'Country code is required' })}
              className="mr-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-24 h-12 px-3"
            >
              <option value="" disabled>Select Country Code</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
              {/* Add more country codes as needed */}
            </select>
            {/* Phone Number Input */}
            <input
              {...register('phoneNumber', { required: 'Phone number is required' })}
              className="w-full h-12 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          {errors.countryCode && <p className="text-red-500">{errors.countryCode.message}</p>}
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date of Birth</label>
          <input
            {...register('dateOfBirth', { required: 'Date of Birth is required' })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="date"
          />
          {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth.message}</p>}
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              {...register('terms', { required: 'You must accept the terms and conditions' })}
              type="checkbox"
              className="mr-2"
            />
            I agree to the <span className="text-blue-500 cursor-pointer">Terms and Conditions</span>
          </label>
          {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Register
        </button>
      </form>

      {/* Social login buttons with only icons */}
      <div className="mt-6 text-center">
        <p className="mb-4">Or sign up with:</p>
        <div className="flex justify-center space-x-4">
          {/* Google Login Button */}
          <button
            onClick={() => handleSocialLogin(googleProvider)}
            className="flex items-center justify-center bg-red-500 text-white rounded-full w-12 h-12 hover:bg-red-600"
          >
            <AiFillGoogleCircle className="text-3xl" />
          </button>
          
          {/* GitHub Login Button */}
          <button
            onClick={() => handleSocialLogin(githubProvider)}
            className="flex items-center justify-center bg-gray-800 text-white rounded-full w-12 h-12 hover:bg-gray-900"
          >
            <AiFillGithub className="text-3xl" />
          </button>
          
          {/* Facebook Login Button */}
          <button
            onClick={() => handleSocialLogin(facebookProvider)}
            className="flex items-center justify-center bg-blue-500 text-white rounded-full w-12 h-12 hover:bg-blue-600"
          >
            <FaFacebookF className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationForm;