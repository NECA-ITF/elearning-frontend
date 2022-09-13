import React, { useState } from 'react';
import HomePage from './pages/homePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import DashBoard from './pages/dashBoard/DashBoard';
import PlayCourses from './pages/myCourses/PlayCourses';
import ProfilePage from './pages/profilePage/ProfilePage';
import EditedProfile from './pages/profilePage/EditedProfile'
import ContactPage from './pages/contactPage/ContactPage';
import ChangePassword from './pages/profilePage/ChangePassword';
import CoursesOutline from './pages/courseOutline/CoursesOutline';
import AboutPage from './pages/about/AboutPage';
import AdminDashBoard from './pages/adminDashBoard/AdminDashBoard';
import AdminAllOutline from './pages/adminDashBoard/AdminAllOutline';
import AdminUsers from './pages/adminDashBoard/AdminUsers';
import './App.css';

function App() {
  const API_URL = "http://192.168.1.3:5000";
  const [currentCourse, setCurrentCourse] = useState({});
  const [currentCourseOutline, setCurrentCourseOutline] = useState({});
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin-dash" element={<AdminDashBoard API_URL={API_URL} />} />
        <Route path="/admin-outline" element={<AdminAllOutline API_URL={API_URL} />} />
        <Route path="/admin-users" element={<AdminUsers API_URL={API_URL} />} />
        <Route path="/signup" element={<SignupPage API_URL={API_URL} />} />
        <Route path="/login" element={<LoginPage API_URL={API_URL} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dash-board" element={<DashBoard API_URL={API_URL} setCurrentCourse={setCurrentCourse} />} />
        <Route path="/play-courses" element={<PlayCourses API_URL={API_URL} currentCourseOutline={currentCourseOutline} />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/edited-profile" element={<EditedProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/course-outline" element={<CoursesOutline API_URL={API_URL} currentCourse={currentCourse} setCurrentCourseOutline={setCurrentCourseOutline} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;