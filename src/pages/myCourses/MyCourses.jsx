import React from 'react'
import video from './courseAssets/vid1.mp4'
import thumbnails from '../myCourses/courseAssets/react-thumbnail.jpg'
import '../../App.css'
import './MyCourses.css'
import NavBar from './NavBar'
import Ratings from './Ratings'
function MyCourses() {
  return (
    <div>
      <NavBar/>
      <div className='course-container'>
      <div className="course-video">
          <div style={{ width: '100%'}}>
            <video controls src={video} alt="video" id='course-vid' style={{ width: '100%'}} poster={thumbnails}/>
          </div>
          <ul>
            <li>Course Materials</li>
            <li>Resources</li>
            <li>External Links</li>
          </ul>
          <div className="course-section">
            <h1 className='course-header'>Introduction to <span>React.</span></h1><p className='course-p'> Learn everything about React, from the basics, to advanced topics like React components, props, hooks, among others</p>
            <p className='rates'>Ratings <Ratings/></p>
          </div>
      </div>
      <div className="sub-outline">
          <h4 className='course-head'>Course Videos</h4>
          <div className='course-list'> Components</div>
          <div className='course-list'>  Hooks</div>
          <div className='course-list'>  Props</div>
          <div className='course-list'>  State</div>
          <div className='course-list'> Components</div>
          <div className='course-list'>  Hooks</div>
          <div className='course-list'>  Props</div>
          <div className='course-list'>  State</div>
          <div className='course-list'> Components</div>
          <div className='course-list'>  Hooks</div>
          <div className='course-list'>  Props</div>
          <div className='course-list'>  State</div>
      </div>
    </div>
    </div>
    
  )
}

export default MyCourses