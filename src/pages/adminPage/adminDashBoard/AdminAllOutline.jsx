import React, { useState, useEffect } from 'react'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import './AdminAllOutline.css'
import OutlineVideo from './OutlineVideo/OutlineVideo'
import Outline from './Outline/Outline'
import { useNavigate } from 'react-router-dom';

function AdminAllOutline({ API_URL, currentCourse, currentCourseOutline, setCurrentCourse, setCurrentCourseOutline }) {
    const navigate = useNavigate();
    if(!Object.keys(currentCourse).length) navigate('/admin-dash', { replace: true });

    const [outlineCourses, setOutlineCourses] = useState([]);
    const [courseOutline, setCourseOutline] = useState([]);
    const [courseOutlineVideos, setCourseOutlineVideos] = useState([]);
    const data =[
        {title: ""},
      ]
      const mode = 'outline';
    // console.log(API_URL);
    
    function getVideos(outline){
        // console.log(outline);
        // console.log(currentCourse.requirements)
        fetch(`${API_URL}/api/videos/${outline._id}`)
        .then(response => response.json())
        .then(data => 
            setCourseOutlineVideos(data.resData ? data.resData.videos : [])
        )
        .catch((err) => console.log(err))
    }
    function getOutline(course){
        // console.log(course ? course.title : currentCourse.title)
        fetch(`${API_URL}/api/outlines/${course ? course._id : currentCourse._id}`)
        .then(response => response.json())
        .then(data => {
            setCourseOutline(data.outline ? data.outline.outlines : []);
            if(data.outline) {
                setCurrentCourseOutline(data.outline.outlines[0]);
                getVideos(data.outline.outlines[0])
            }else{
                setCourseOutlineVideos([]);
            }
        })
        .catch((err) => console.log(err))
    }
    function getOutlineCourses(){
        // console.log(currentCourse.requirements)
        // let courses;
        fetch(`${API_URL}/api/courses`)
        .then(response => response.json())
        .then(response => { 
            // console.log(response);
            setOutlineCourses(response.courses);
        })
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        getOutline();
        getOutlineCourses();
    }, []);


  return (
    <div className="adminDashContainer">
        <AdminDashSide />
        <div className="adminDashContent">
            <div className="adminDashContentContainer">
                <AdminDashContentHeader mData={data} mMode={mode} API_URL={API_URL} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} currentCourseOutline={currentCourseOutline} getOutline={getOutline} outlineCourses={outlineCourses} />
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
                                <OutlineVideo API_URL={API_URL} video={video} currentCourse={currentCourse} currentCourseOutline={currentCourseOutline} getVideos={getVideos} />
                            )) : 
                            courseOutline.length !== 0 ? <h1>No videos for {currentCourseOutline.title}</h1> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAllOutline