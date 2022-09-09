import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import About from './pages/about/AboutPage';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import DashBoard from './pages/dashBoard/DashBoard';
import PlayCourses from './pages/myCourses/PlayCourses';
import ProfilePage from './pages/profilePage/ProfilePage';
import EditedProfile from './pages/profilePage/EditedProfile'
import ContactPage from './pages/contactPage/ContactPage';
import ChangePassword from './pages/profilePage/ChangePassword';
import CourseOutline from './pages/courseOutline/CourseOutline';
import './App.css';


function App() {
  
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<CourseOutline />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/play-courses" element={<PlayCourses />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/edited-profile" element={<EditedProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/contact-page" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;