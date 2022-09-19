import React, {useState} from 'react'
import './CourseOutline.css'
import { Link } from 'react-router-dom';

function OutlineList({title, content, lectures, time, outline, setCurrentCourseOutline}) {
    const [isActive, setIsActive] = useState(false)
  return (
    // <Link to="/play-courses">
        <div className="accordion-item" onClick={() => {setCurrentCourseOutline(outline)}}>
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{lectures}.{time}<span style={{marginLeft:'2rem'}}>{isActive ? '-' : '+'}</span></div>
            </div>
            {/* {isActive && <ul className="accordion-content">
              <li>{content[0]}</li>
              <li>{content[1]}</li>
              <li>{content[2]}</li>
            </ul>} */}
        </div>
    // </Link>
  )
}

export default OutlineList
