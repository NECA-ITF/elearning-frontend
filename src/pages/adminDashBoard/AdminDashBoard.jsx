import React,{ useState, useEffect }  from 'react'
import './AdminDashBoard.css'
// import courses from '../dashBoard/data.json'
import DashCourseList from '../dashBoard/DashCourseList'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'


function AdminDashBoard({ API_URL}) {
  const [courses, setCourses]= useState([])

  useEffect(() => {
    fetch(`${API_URL}/api/courses`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setCourses(data.courses))
    .catch((err) => console.log(err))
  }, [])
  return (

    <div className='adminDashContainer'>
        <AdminDashSide />
        <div id='adminDash-right'>
          <div className="adminDashContentContainer">
            <AdminDashContentHeader />
            <DashCourseList courses= {courses} isAdmin= {true} API_URL={API_URL}/>
          </div>
        </div>
    </div>
  )
}

export default AdminDashBoard
