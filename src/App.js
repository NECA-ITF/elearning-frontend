import React from 'react';
import HomePage from './pages/homePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import MyCourses from './pages/myCourses/MyCourses';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="myCourses/" element={<MyCourses />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;