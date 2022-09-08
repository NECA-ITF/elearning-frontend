import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import AdminDashBoard from './pages/adminDashBoard/AdminDashBoard';
import About from './pages/about/AboutPage';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import DashBoard from './pages/dashBoard/DashBoard';
import MyCourses from './pages/myCourses/MyCourses';
import ProfilePage from './pages/profilePage/ProfilePage';
import EditedProfile from './pages/profilePage/EditedProfile'
import './App.css';
import AdminDashBoardOutlines from './pages/adminDashBoard/AdminDashBoardOutlines';


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<AdminDashBoard />} />
        <Route path="/about" element={<About />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/myCourses" element={<MyCourses />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/editedProfile" element={<EditedProfile />} />
        <Route  path="/admin-dashboard/" element={<AdminDashBoard />}/>
        <Route  path="/outlines" element={<AdminDashBoardOutlines />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;