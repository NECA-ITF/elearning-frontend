import React from 'react'
import DashBoardCourse from './DashBoardCourse'
import courses from './data.json'
import './DashBoard.css'

function DashBoard() {
  return (
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
  )
}

export default DashBoard
