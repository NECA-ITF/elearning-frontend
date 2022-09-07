import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import MyCourses from './pages/myCourses/MyCourses';
import DashBoard from './pages/dashBoard/DashBoard'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="myCourses/" element={<MyCourses />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;