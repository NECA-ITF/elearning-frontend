import React from 'react';
import NavBar from '../homePage/NavBar';
import './CourseOutline.css'
import CourseOutline from './CourseOutline'

function CoursesOutline({ API_URL, currentCourse }) {
  return (
    <div className='accordion-container'>
        <NavBar/>
        <CourseOutline API_URL={API_URL} currentCourse={currentCourse} />
    </div>
  )
}

export default CoursesOutline
