import React, { useState, useEffect } from 'react'
import CustomButton from '../../components/customButton/CustomButton';
import './CourseOutline.css'
import OutlineList from './OutlineList';
import { Link } from 'react-router-dom';


function DashCourseOutline({ API_URL, currentCourse }) {
  const [courseOutline, setCourseOutline] = useState([]);
    const outlineData = [
        {
          title: 'Getting Started',
          content: ['Welcome to the Course', 'What is React.js?','Why React instead of "Just Javascript"'],
          lectures: '2 lectures',
          time: '6hrs'
        },
        {
          title: 'Javascript Refresher',
          content: ['Module Introduction', 'Understanding "let" and "const"', 'Arrow Functions'],
          lectures: '3 lectures',
          time: '9hrs'
        },
        {
          title: 'React Basics & Working with Components',
          content:['Module Introduction', 'What are Components?', 'Why is React All About Them?'],
          lectures: '4 lectures',
          time: '11hrs'
        },
        {
          title: 'React State & Working with Events',
          content: ['Module Introduction', 'Listening to Events & Working with Event Handlers'],
          lectures: '2 lectures',
          time: '1hr'
        },
        {
          title: 'Rendering Lists and Conditional Content',
          content: ['Module introduction', 'Rendering Lists of Data', 'Using Stateful Lists'],
          lectures: '1 lecture',
          time: '30mins'
        },
        {
          title: 'Styling React Component',
          content: ['Module Introduction', 'Setting Dynamic Inline styles', 'Setting CSS Classes Dynamically'],
          lectures: '4 lectures',
          time: '5hrs'
        },
        {
          title: 'A Complete Practice Project',
          content:['Module Introduction', 'Adding a "User" Component', 'Adding a re-usable "Card" Component'],
          lectures: '4 lectures',
          time: '5hrs'
        }
      ];
      
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
            {courseOutline.map(({ title, content, lectures, time }) => (
              <OutlineList title={title} content={content} lectures={lectures} time={time}/>
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
          <div>
          <Link to='/play-courses' className='links'>
            <CustomButton title='start course' style={{width: "100%", fontFamily:'BioRhyme, serif', marginBottom: '2rem', padding:"10px 0px 12px", boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}}/>
          </Link>
          </div>
        </div>
      </div>
  )
}

export default DashCourseOutline
