import React from 'react';
import NavBar from '../homePage/NavBar';
import './CourseOutline.css'
import CourseOutline from './CourseOutline'

function CoursesOutline() {
  return (
    <div className='accordion-container'>
        <NavBar/>
        <CourseOutline/>
    </div>
  )
}

export default CoursesOutline
