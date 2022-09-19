import React, { useState, useEffect } from 'react'
import CustomButton from '../../components/customButton/CustomButton';
import './CourseOutline.css'
import OutlineList from './OutlineList';
import { Link, useNavigate } from 'react-router-dom';


function DashCourseOutline({ API_URL, currentCourse, setCurrentCourseOutline }) {
  // const navigate = useNavigate();
  // if(!Object.keys(currentCourse).length) navigate('/dash-board', {replace: true});
  // console.log(Object.keys(currentCourse))

  const [courseOutline, setCourseOutline] = useState([]);
   
      
  useEffect(() => {
    // console.log(currentCourse.requirements)
    fetch(`${API_URL}/api/outlines/${currentCourse._id}`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setCourseOutline(data.outline.outlines))
    .catch((err) => console.log(err))
  }, []);
  return (
      <div className='accord-wrapper'>
        <div className='accord-container'>
          <h1>Course Outline</h1>
            <div className="accordion">
              {courseOutline.map((outline) => (
                <OutlineList title={outline.title} content={outline.content} lectures={outline.lectures} time={outline.time} outline={outline} setCurrentCourseOutline={setCurrentCourseOutline} />
              ))}
            </div>
          <h2>{currentCourse.title} Requirements</h2>
          <ul>
            {
              currentCourse.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))
            }
            {/* <li>Knowledge of HTML and CSS</li>
            <li>Knowledge of Javascript</li>
            <li>Desire to learn!</li> */}
          </ul>
          <h3>Description</h3>
          <h5 className='description-text'>{currentCourse.description}</h5>
          {/* <div>
          <Link to='/play-courses' className='links'>
            <CustomButton title='start course' style={{width: "100%", fontFamily:'BioRhyme, serif', marginBottom: '2rem', padding:"10px 0px 12px", boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}}/>
          </Link>
          </div> */}
        </div>
      </div>
  )
}

export default DashCourseOutline
