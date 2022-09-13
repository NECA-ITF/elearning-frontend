import React from 'react';
import NavBar from '../homePage/NavBar';
import './CourseOutline.css'
import CourseOutline from './CourseOutline'

function CoursesOutline({ API_URL, currentCourse, setCurrentCourseOutline }) {
  return (
    <div className='accordion-container'>
        <NavBar/>
        <CourseOutline API_URL={API_URL} currentCourse={currentCourse} setCurrentCourseOutline={setCurrentCourseOutline} />
    </div>
  )
}

export default CoursesOutline
