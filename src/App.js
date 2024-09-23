import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Auth from './components/Auth/Auth'; // Contains both Login and Register
import UserProfile from './components/profile/userProfile';
import EditProfile from './components/profile/editProfile';
import CreatePost from './components/posts/createPosts';
import PostList from './components/posts/postLists';
import EditPost from './components/posts/editPost';
import NotificationList from './components/notifications/notifications';
import Search from './pages/search';
import Home from './pages/home'; // Make sure you import the Home component

const App = () => {
  // Since you don't have a backend yet, this can be a mock user ID
  const [userId] = React.useState('mockUserId123'); // Replace with real user ID logic

  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Routes>
            {/* Auth routes (Login/Register) */}
            <Route path="/" element={<Auth />} />

            {/* Profile routes */}
            <Route path="/profile" element={<UserProfile userId={userId} />} />
            <Route path="/profile/edit" element={<EditProfile />} />

            {/* Post routes */}
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/posts/edit/:id" element={<EditPost />} />
            <Route path="/notifications" element={<NotificationList />} />
            <Route path="/search" element={<Search />} />
            
            {/* Home route */}
            <Route path="/home" element={<Home />} /> {/* Main route for home */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
