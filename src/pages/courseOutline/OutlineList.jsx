import React, {useState} from 'react'
import './CourseOutline.css'

function OutlineList({title, content, lectures, time}) {
    const [isActive, setIsActive] = useState(false)
  return (
    <div>
        <div className="accordion-item">
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
    </div>
  )
}

export default OutlineList
