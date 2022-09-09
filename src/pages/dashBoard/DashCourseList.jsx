import React from 'react'
import './DashCourseList.css'
import CourseCard from './CourseCard'

function DashCourseList({courses, isAdmin}) {
  return (
    <div>
      <div className='coursecontainer'>
        {courses.map((course)=>(
          <CourseCard
          isAdmin={isAdmin}
          key={course.id}
          name = {course.instructor}
          title = {course.title}
          image ={course.thumbnail}
          icons ={course.proficons}
          />
        ))}
      </div>
    </div>
  )
}

export default DashCourseList
