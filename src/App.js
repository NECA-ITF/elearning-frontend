import React, { useState,useEffect } from 'react';
import HomePage from './pages/homePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './util/PrivateRoutes';
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
import AdminContacts from './pages/adminPage/adminDashBoard/AdminContacts';
import './App.css';
import TermsOfUse from './pages/policy/termsOfUse/TermsOfUse';
import PrivacyPolicy from './pages/policy/privacyPolicy/PrivacyPolicy';
import ErrorPage from './pages/errorPage/ErrorPage';
import CourseMaterials from './pages/courseMaterials/CourseMaterials'
import WaitingPage from './pages/waitingPage/WaitingPage';
import SuccessPage from './pages/waitingPage/SuccessPage'


function App() {
  //const API_URL = "http://localhost:5000";
  const API_URL = "http://192.168.1.2:5000";

  const [currentCourse, setCurrentCourse] = useState({});
  const [currentCourseOutline, setCurrentCourseOutline] = useState({});
  const [auth, setAuth] = useState({})
  const[userData,setUserData] = useState(null)
  useEffect(()=>{
    setUserData(JSON.parse(localStorage.getItem('userData')))
    setAuth(JSON.parse(localStorage.getItem('auth')))
  },[])

  return (
    <div>
      <Router>
        <Routes>
          <Route element = {<PrivateRoutes auth = {auth}/>}>
            <Route path="/admin-dash" element={<AdminDashBoard API_URL={API_URL} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />} />
            <Route path="/play-courses" element={<PlayCourses API_URL={API_URL} currentCourse={currentCourse} currentCourseOutline={currentCourseOutline} />} />
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route path="/edited-profile" element={<EditedProfile API_URL={API_URL} />} />

            <Route path="/change-password" element={<ChangePassword API_URL={API_URL} />} />
            <Route path="/contact-page" element={<ContactPage API_URL={API_URL} />} />
            <Route path="/course-outline" element={<CoursesOutline API_URL={API_URL} currentCourse={currentCourse} setCurrentCourseOutline={setCurrentCourseOutline} />} />
            <Route path="/admin-outline" element={<AdminOutline API_URL={API_URL} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} currentCourseOutline={currentCourseOutline} setCurrentCourseOutline={setCurrentCourseOutline} />} />
            <Route path="/admin-users" element={<AdminUsers API_URL={API_URL} />} />
            <Route path="/waiting-page" element={<WaitingPage />} />
            <Route path="/success-page" element={<SuccessPage />} />
          </Route>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignupPage API_URL={API_URL} />} />
          <Route path="/login" element={<LoginPage API_URL={API_URL} />} />
          <Route path="/forgot-password" element={<ForgotPassword API_URL={API_URL} />} />
          <Route path="/dash-board" element={userData?.isAdmin ? <AdminDashBoard API_URL={API_URL} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} /> :  <DashBoard API_URL={API_URL} setCurrentCourse={setCurrentCourse} />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/course-materials" element={<CourseMaterials />} />
          <Route path="/admin-contacts" element={<AdminContacts API_URL={API_URL} />} />
          {/* <Route path="*" element={<DashBoard API_URL={API_URL} setCurrentCourse={setCurrentCourse} />} /> */}
          <Route path="/*" element={<ErrorPage />} />

        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App;