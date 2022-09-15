import React, { useState, useEffect } from 'react'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import './AdminAllOutline.css'
import OutlineVideo from './OutlineVideo/OutlineVideo'
import Outline from './Outline/Outline'
function AdminAllOutline({ API_URL, currentCourse, currentCourseOutline, setCurrentCourseOutline }) {
    const [courseOutline, setCourseOutline] = useState([]);
    const [courseOutlineVideos, setCourseOutlineVideos] = useState([]);
    const data =[
        {title: ""},
      ]
      const mode = 'outline';
    // console.log(API_URL);
    
    function getVideos(outline){
        // console.log(outline.title);
        // console.log(currentCourse.requirements)
        fetch(`${API_URL}/api/videos/${outline._id}`)
        .then(response => response.json())
        .then(data => 
            setCourseOutlineVideos(data.resData ? data.resData.videos : [])
        )
        .catch((err) => console.log(err))
    }
    function getOutline(){
        // console.log(currentCourse.requirements)
        fetch(`${API_URL}/api/outlines/${currentCourse._id}`)
        .then(response => response.json())
        .then(data => {
            setCourseOutline(data.outline.outlines);
            if(data.outline.outlines.length) {
                setCurrentCourseOutline(data.outline.outlines[0]);
                getVideos(data.outline.outlines[0])
            }
        })
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        getOutline();
    }, []);

    // useEffect(() => {
    //     getVideos();
    // }, []);


  return (
    <div className="adminDashContainer">
        <AdminDashSide />
        <div className="adminDashContent">
            <div className="adminDashContentContainer">
                <AdminDashContentHeader mData={data} mMode={mode} API_URL={API_URL} currentCourse={currentCourse} getOutline={getOutline} />
                <div className="adminDashContentBody">
                    <div className="adminDashCourseOutlines">
                        {
                            courseOutline.map((outline) => (
                                <Outline key={outline._id} title={outline.title} API_URL={API_URL} currentCourse={currentCourse} outline={outline} currentCourseOutline={currentCourseOutline} setCurrentCourseOutline={setCurrentCourseOutline}  getOutline={getOutline} getVideos={getVideos} />
                            ))
                        }
                    </div>
                    <div className="adminDashCourseOutlinesVideos">
                        {
                            courseOutlineVideos.length ? 
                            courseOutlineVideos.map(video => (
                                <OutlineVideo API_URL={API_URL} video={video} currentCourse={currentCourse} />
                            )) : 
                            <h1>No videos for {currentCourseOutline.title}</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAllOutline