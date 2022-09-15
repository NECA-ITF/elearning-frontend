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
import AdminDashBoard from './pages/adminPage/adminDashBoard/AdminDashBoard';
import AdminOutline from './pages/adminPage/adminDashBoard/AdminAllOutline';
import AdminUsers from './pages/adminPage/adminDashBoard/AdminUsers';
import './App.css';
import TermsOfUse from './pages/policy/termsOfUse/TermsOfUse';
import PrivacyPolicy from '../src/pages/policy/privacyPolicy/PrivacyPolicy';


function App() {
  const API_URL = "http://192.168.1.2:5000";
  const [currentCourse, setCurrentCourse] = useState({});
  const [currentCourseOutline, setCurrentCourseOutline] = useState({});
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin-dash" element={<AdminDashBoard API_URL={API_URL} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />} />
        <Route path="/signup" element={<SignupPage API_URL={API_URL} />} />
        <Route path="/login" element={<LoginPage API_URL={API_URL} />} />
        <Route path="/forgot-password" element={<ForgotPassword API_URL={API_URL} />} />
        <Route path="/dash-board" element={<DashBoard API_URL={API_URL} setCurrentCourse={setCurrentCourse} />} />
        <Route path="/play-courses" element={<PlayCourses API_URL={API_URL} currentCourse={currentCourse} currentCourseOutline={currentCourseOutline} />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/edited-profile" element={<EditedProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/course-outline" element={<CoursesOutline API_URL={API_URL} currentCourse={currentCourse} setCurrentCourseOutline={setCurrentCourseOutline} />} />
        <Route path="/admin-outline" element={<AdminOutline API_URL={API_URL} currentCourse={currentCourse} currentCourseOutline={currentCourseOutline} setCurrentCourseOutline={setCurrentCourseOutline} />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;