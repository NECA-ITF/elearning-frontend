import React, { useState, useEffect } from 'react'
import star from '../myCourses/courseAssets/rating.svg'
import hover from '../myCourses/courseAssets/star.svg'
import '../../App.css'
import Ratings from 'react-rating'
import './PlayCourses.css'
import PlayCourseNav from './PlayCourseNav'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import axios from 'axios';




function PlayCourses({ API_URL }) {
  const currentCourse = JSON.parse(localStorage.getItem('currentCourse'));
  const currentCourseOutline = JSON.parse(localStorage.getItem('currentCourseOutline'));
  const [outlineVideos, setOutlineVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({}); 
  // const currentVideo1 = {_id: "iniovr", title: "were here", url: "api/static/videos/vid1.mp4"}; 
  const [percentage, setPercent] = useState(0);

  function getProgress(outlineVideos){
    const userData = localStorage.getItem('userData');
    const currentCourse = localStorage.getItem('currentCourse');
    if(!userData) return;
    if(!currentCourse) return;

    // return console.log({
    //   userId: JSON.parse(userData)._id,
    //   courseId: JSON.parse(currentCourse)._id
    // })
    
    axios.get(`${API_URL}/api/history/course/${JSON.parse(userData)._id}/${JSON.parse(currentCourse)._id}`)
    .then((res) => {
      // return console.log(outlineVideos)
      const watchedCount = res.data.courseHistory.watchedVideos.length;
      let courseVideoCount = 0;
      outlineVideos.forEach(outline => (
        courseVideoCount += outline.videos.length
      ))
      setPercent(Math.round( (watchedCount/courseVideoCount) * 100 ));
    })
    .catch(err => console.log(err))


  }

  function handleUpdateCourseHistory(video){
    const userData = localStorage.getItem('userData');
    const currentCourse = localStorage.getItem('currentCourse');
    if(!userData) return;
    if(!currentCourse) return;
    
    axios.post(`${API_URL}/api/history/course`, {
      userId: JSON.parse(userData)._id,
      courseId: JSON.parse(currentCourse)._id,
      videoId: video._id
    })
    .then((res) => {
      if(res.data.success) getProgress(outlineVideos);
    })
    .catch(err => console.log(err.response.data.message))

  }

  async function getVideos(){
    let response = await fetch(`${API_URL}/api/allvideos/${currentCourse._id}`);
    response = await response.json();
    if(response.success){
      setOutlineVideos(response.allData);
      const clickedOutline = response.allData.find(videoObj => videoObj.outlineTitle === currentCourseOutline.title);
      setCurrentVideo(clickedOutline.videos[0]);
  }
  getProgress(response.allData);
  }
  useEffect(() => {
    // console.log(currentCourseOutline)
    getVideos();
  }, []);

  return (
    
      outlineVideos.length ? 
      
    <div>
      <PlayCourseNav/>
      <div className='course-container'>
      <div className="course-video">
          <div style={{ width: '100%'}}>
            <video key={currentVideo._id} controls autoPlay  
              alt="video" 
              id='course-vid' 
              style={{ width: '100%'}} 
              poster={`${API_URL}/${currentCourse.thumbnail}`} 
              onEnded={() => { handleUpdateCourseHistory(currentVideo) }}
            >
              <source src={`${API_URL}/${currentVideo.url}`} type="video/mp4"/>
            </video>
          </div>
          <ul>
            <Link to='/course-materials'>
              <li className='my-course'>Course materials  and External links</li>
            </Link>
          </ul>
          <div className="course-section">
            <div className="course-sectionFlex">
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
            <div className="barFlex">
              <h4>Progress report</h4>
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </div>
      </div>
      <div className="sub-outline">
        <div className='course-head'>
          <h4>Course Videos</h4>
        </div>  
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