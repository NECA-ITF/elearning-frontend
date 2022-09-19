import React from 'react'
import './DashCourseList.css'
import CourseCard from './CourseCard'

function DashCourseList({courses, isAdmin, API_URL, setCurrentCourse, getCourses}) {
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
          course={course}
          setCurrentCourse={setCurrentCourse}
          time={course.totalHours}
          ratings={course.rating}
          getCourses={getCourses}
          // icons ={course.proficons}
          />
        ))}
      </div>
    </div>
  )
}

export default DashCourseList
