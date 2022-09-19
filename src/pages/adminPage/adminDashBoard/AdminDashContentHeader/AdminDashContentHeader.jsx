import React from 'react'
import './AdminDashContentHeader.css'
import CustomModal from '../../../../components/customModal/CustomModal'

function adminDashContentHeader({mData, mMode, API_URL, currentCourse, setCurrentCourse, outlineCourses, courses, getCourses, getOutline, currentCourseOutline }) {
  return (
    <div className="adminDashContentHeader">
        {
          mMode !== "outline" ? "" : 
          <select value={ currentCourse._id } 
            onChange={(event) => {
              setCurrentCourse(outlineCourses.find(course => course._id === event.target.value));
              getOutline(outlineCourses.find(course => course._id === event.target.value));   
            }}
          >
          {
            outlineCourses.map((course) => (
              <option key={course._id} value={ course._id }>{course.title}</option>
            ))
          }
        </select>
        }
        <CustomModal data = {mData} mode ={mMode} API_URL={API_URL} currentCourse={currentCourse} getCourses={getCourses} getOutline={getOutline} currentCourseOutline={currentCourseOutline} />
    </div>
  )
}

export default adminDashContentHeader