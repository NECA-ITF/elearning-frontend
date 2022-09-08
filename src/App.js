import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import About from './pages/about/AboutPage';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import DashBoard from './pages/dashBoard/DashBoard';
import MyCourses from './pages/myCourses/MyCourses';
import ProfilePage from './pages/profilePage/ProfilePage';
import EditedProfile from './pages/profilePage/EditedProfile'
import './App.css';
import ChangePassword from './pages/profilePage/ChangePassword';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/edited-profile" element={<EditedProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App;