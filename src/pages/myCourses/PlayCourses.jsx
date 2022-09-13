import React, { useState, useEffect } from 'react'
import video from './courseAssets/vid1.mp4'
import thumbnails from '../myCourses/courseAssets/react-thumbnail.jpg'
import star from '../myCourses/courseAssets/rating.svg'
import hover from '../myCourses/courseAssets/star.svg'
import '../../App.css'
import Ratings from 'react-rating'
import './PlayCourses.css'
import PlayCourseNav from './PlayCourseNav'



function PlayCourses({ API_URL, currentCourseOutline }) {
  const [currentVideo, setCurrentVideo] = useState({});
  const [outlineVideos, setOutlineVideos] = useState([]);


  useEffect(() => {
    // console.log(currentCourseOutline)
    fetch(`${API_URL}/api/videos/${currentCourseOutline._id}`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setOutlineVideos(data.resData.videos))
    .catch((err) => console.log(err))

    setCurrentVideo(outlineVideos[0]);
  }, []);

  return (
    <div>
      <PlayCourseNav/>
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
            <h1 className='course-header'>{currentVideo ? currentVideo.title : ""}</h1><p className='course-p'> Learn everything about React, from the basics, to advanced topics like React components, props, hooks, among others.</p>
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
              <div key={video._id} className='course-list' onClick={() => {setCurrentVideo(video)}} >{video.title}</div>
            ))
          }
          
      </div>
    </div>
    </div>
    
  )
}

export default PlayCourses