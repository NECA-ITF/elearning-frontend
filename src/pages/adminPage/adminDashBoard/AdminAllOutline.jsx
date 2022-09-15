import React, { useState, useEffect } from 'react'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import './AdminAllOutline.css'
import OutlineVideo from './OutlineVideo/OutlineVideo'
import Outline from './Outline/Outline'
function AdminAllOutline({ API_URL, currentCourse, currentCourseOutline, setCurrentCourseOutline }) {
    const [courseOutline, setCourseOutline] = useState([]);
    const data =[
        {title: ""},
      ]
      const mode = 'outline';
    // console.log(API_URL);

      
  useEffect(() => {
    // console.log(currentCourse.requirements)
    fetch(`${API_URL}/api/outlines/${currentCourse._id}`)
    .then(response => response.json())
    .then(data => setCourseOutline(data.outline.outlines))
    // .then(data => console.log(data))
    // .then(data => setCurrentCourseOutline(data.outline.outlines[0]))
    .catch((err) => console.log(err))
  }, []);


  return (
    <div className="adminDashContainer">
        <AdminDashSide />
        <div className="adminDashContent">
            <div className="adminDashContentContainer">
                <AdminDashContentHeader mData={data} mMode={mode} API_URL={API_URL} currentCourse={currentCourse}  />
                <div className="adminDashContentBody">
                    <div className="adminDashCourseOutlines">
                        {
                            courseOutline.map((outline) => (
                                <Outline key={outline._id} title={outline.title} currentCourse={currentCourse} outline={outline} currentCourseOutline={currentCourseOutline} setCurrentCourseOutline={setCurrentCourseOutline} />
                            ))
                        }
                    </div>
                    <div className="adminDashCourseOutlinesVideos">
                        <OutlineVideo title = 'HTML COURSE 1' />
                        <OutlineVideo title = 'HTML COURSE 2' />
                        <OutlineVideo title = 'HTML COURSE 3' />
                        <OutlineVideo title = 'HTML COURSE 4' />
                        <OutlineVideo title = 'HTML COURSE 5' />
                        <OutlineVideo title = 'HTML COURSE 6' />
                        <OutlineVideo title = 'HTML COURSE 7' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAllOutline