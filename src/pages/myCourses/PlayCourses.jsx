import React, { useState, useEffect } from 'react'
import video from './courseAssets/vid1.mp4'
import thumbnails from '../myCourses/courseAssets/react-thumbnail.jpg'
import star from '../myCourses/courseAssets/rating.svg'
import hover from '../myCourses/courseAssets/star.svg'
import '../../App.css'
import Ratings from 'react-rating'
import './PlayCourses.css'
import PlayCourseNav from './PlayCourseNav'



function PlayCourses({ API_URL, currentCourse }) {
  const currentCourseOutline = JSON.parse(localStorage.getItem('currentCourseOutline'));
  const [outlineVideos, setOutlineVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({}); 
  
  // const currentVideo1 = {_id: "iniovr", title: "were here", url: "api/static/videos/vid1.mp4"}; 
  
  useEffect(() => {
    // console.log(currentCourseOutline)
    async function getVideos(){
      let response = await fetch(`${API_URL}/api/videos/${currentCourseOutline._id}`);
      response = await response.json();
      setOutlineVideos(response.resData.videos);
      
      setCurrentVideo(response.resData.videos[0]);
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
            <li>Course Materials</li>
            <li>Resources</li> 
            <li>External Links</li>
          </ul>
          <div className="course-section">
            <h1 className='course-header'>{typeof(currentVideo) === "undefined" ? "undefined" : currentVideo.title}</h1><p className='course-p'> Learn everything about React, from the basics, to advanced topics like React components, props, hooks, among others.</p>
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
            outlineVideos.map((video) => (
              <div key={video._id} className='course-list' 
              style={{
                boxShadow: currentVideo._id === video._id ? "rgba(0, 0, 0, 0.65) 0px 5px 50px" : "",
                cursor: "pointer"
            }}
              onClick={() => { setCurrentVideo(video) }} >{video.title}</div>
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