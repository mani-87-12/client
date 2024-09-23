import '../../input.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, setAuthError, clearAuthError } from '../../store/authSlice';
import { auth, googleProvider, githubProvider, facebookProvider, signInWithPopup } from '../../firebaseConfig';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { email, password, authError } = useSelector((state) => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Handle user login logic here (e.g., Firebase signInWithEmailAndPassword)
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        dispatch(setAuthError('The popup was closed before completing the sign-in.'));
      } else {
        dispatch(setAuthError(error.message));
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

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
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
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
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long'
              }
            })}
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
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
          Login
        </button>
      </form>

      {/* Social login buttons */}
      <div className="mt-6 text-center">
        <p className="mb-4">Or sign in with:</p>
        <button
          onClick={() => handleSocialLogin(googleProvider)}
          className="bg-red-500 text-white py-2 px-4 rounded-lg w-full mb-2 hover:bg-red-600"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubProvider)}
          className="bg-gray-800 text-white py-2 px-4 rounded-lg w-full mb-2 hover:bg-gray-900"
        >
          Sign in with GitHub
        </button>
        <button
          onClick={() => handleSocialLogin(facebookProvider)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600"
        >
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
