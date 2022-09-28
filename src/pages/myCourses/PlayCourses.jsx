import React, { useState, useEffect } from 'react'
import star from '../myCourses/courseAssets/rating.svg'
import hover from '../myCourses/courseAssets/star.svg'
import '../../App.css'
import Ratings from 'react-rating'
import './PlayCourses.css'
import PlayCourseNav from './PlayCourseNav'
import { Link } from 'react-router-dom'



function PlayCourses({ API_URL }) {
  const currentCourse = JSON.parse(localStorage.getItem('currentCourse'));
  const currentCourseOutline = JSON.parse(localStorage.getItem('currentCourseOutline'));
  const [outlineVideos, setOutlineVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({}); 
  
  // const currentVideo1 = {_id: "iniovr", title: "were here", url: "api/static/videos/vid1.mp4"}; 
  
  useEffect(() => {
    // console.log(currentCourseOutline)
    async function getVideos(){
      let response = await fetch(`${API_URL}/api/allvideos/${currentCourse._id}`);
      response = await response.json();
      if(response.success){
        setOutlineVideos(response.allData);
        const clickedOutline = response.allData.find(videoObj => videoObj.outlineTitle === currentCourseOutline.title);
        setCurrentVideo(clickedOutline.videos[0]);
    }
    }
    getVideos();
  }, []);

  return (
    
      outlineVideos.length ? 
      
    <div>
      <PlayCourseNav/>
      <div className='course-container'>
      <div className="course-video">
          <div style={{ width: '100%'}}>
            <video key={currentVideo._id} controls autoPlay  alt="video" id='course-vid' style={{ width: '100%'}} poster={`${API_URL}/${currentCourse.thumbnail}`}>
              <source src={`${API_URL}/${currentVideo.url}`} type="video/mp4"/>
            </video>
          </div>
          <ul>
            <Link to='/course-materials'>
              <li className='my-course'>Course Materials</li>
            </Link>
            <li>Resources and External Links</li> 
          </ul>
          <div className="course-section">
            <h1 className='course-header'>{currentCourse.title}</h1>
            <h1 className='course-header'>{typeof(currentVideo) === "undefined" ? "undefined" : currentVideo.title}</h1>
            <p className='rates'>Ratings</p>
            <Ratings
            placeholderRating={3.5}
            emptySymbol={<img src={star} className="icon" alt='#' style={{width:'23px'}} />}
            placeholderSymbol={<img src={star} className="icon" alt='#' style={{width:'23px'}} />}
            fullSymbol={<img src={hover} className="icon" alt='#' style={{width:'23px'}} />}
            />
          </div>
      </div>
      <div className="sub-outline">
        <div className='course-head'>
          <h4>Course Videos</h4>
        </div>  
          {/* <div className='styky'></div> */}
          {
            outlineVideos.map((vidObj) => (
              <>
              <p>{vidObj.outlineTitle}</p>
              {
                
                vidObj.videos.map((video) => (
                  <div key={video._id} className='course-list' 
                  style={ currentVideo._id === video._id ? {
                    background: "linear-gradient(0.9turn,#f2174f, #cc1b4d, #bd1c4d, #97204a, #5c2648, #2e2b48, #202c46)",
                    color: "white"
                  } : {} }
                  onClick={() => { setCurrentVideo(video) }} >{video.title}</div>
                  ))
              }
              </>
            ))
          }
          
      </div>
    </div>
    </div>
    :
    <div className="videoerror"><h1 style={{textAlign:'center'}}>No videos available</h1></div>
    
    
  )
}

export default PlayCourses