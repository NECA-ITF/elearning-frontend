import React from 'react'
import './DashCourseList.css'
import DashBoardCourse from './DashBoardCourse'

function DashCourseList({courses}) {
  return (
    <div>
      <div className='coursecontainer'>
        {courses.map((course)=>(
          <DashBoardCourse
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
