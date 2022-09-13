import React from 'react'
import './DashCourseList.css'
import CourseCard from './CourseCard'

function DashCourseList({courses, isAdmin, API_URL}) {
  return (
    <div>
      <div className='coursecontainer'>
        {courses.map((course)=>(
          <CourseCard
          isAdmin={isAdmin}
          key={course._id}
          name = {course.instructor}
          title = {course.title}
          image ={course.thumbnail}
          API_URL={API_URL}
          // icons ={course.proficons}
          />
        ))}
      </div>
    </div>
  )
}

export default DashCourseList
