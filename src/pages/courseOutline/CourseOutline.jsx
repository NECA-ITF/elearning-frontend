import React from 'react'
import NavBar from '../homePage/NavBar';
import './CourseOutline.css'
import OutlineList from './OutlineList';

function DashCourseOutline() {
    const accordionData = [
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
      
        
  return (
    <div className='accordion-container'>
      <NavBar/>
      <div className='accord-wrapper'>
        <div className='accord-container'>
          <h1>Course Outline</h1>
          <div className="accordion">
            {accordionData.map(({ title, content, lectures, time }) => (
              <OutlineList title={title} content={content} lectures={lectures} time={time}/>
            ))}
          </div>
          <h2>Requirements</h2>
          <ul>
            <li>Basic math skills</li>
            <li>Knowledge of HTML and CSS</li>
            <li>Knowledge of Javascript</li>
            <li>Desire to learn!</li>
          </ul>
          <h3>Description</h3>
          <h5 className='description-text'>This course is fully up-to-date with React 18 (the latest version of React)!
          it was completely updated and re-recorded from the ground up - it teaches the very latest version of React with all the core, modern features you need to know!</h5>
        </div>
      </div>
    </div>
  )
}

export default DashCourseOutline
