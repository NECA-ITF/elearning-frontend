import React from 'react'
import './CourseOutline.css'
import { useNavigate } from 'react-router-dom';

function OutlineList({title, lectures, time, outline, setCurrentCourseOutline}) {

    const navigate = useNavigate() 

    function validateLogin(){
      const user = localStorage.getItem('userData');
      if(user === "null"){
        navigate("/login")
      }
      else(navigate("/play-courses"))
    }

  return (
  
    <div className="accordion-item" onClick={() => {localStorage.setItem('currentCourseOutline', JSON.stringify(outline))}}>
      <div className="accordion-title" onClick={validateLogin}>
        <div>{title}</div>
        <div>{lectures}.{time}</div>
      </div>
    </div>
  )
}

export default OutlineList
