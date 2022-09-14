import React,{ useState, useEffect }  from 'react'
import './AdminDashBoard.css'
import DashCourseList from '../../dashBoard/DashCourseList'
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

  const data =[
    {title: ""},
    {instructor: ""},
    {description: ""},
    {thumbnail: ""},
    {totalHours: ""},
    {ratings: ""}
  ]
  const mode = 'course'
  return (

    <div className='adminDashContainer'>
        <AdminDashSide />
        <div id='adminDash-right'>
          <div className="adminDashContentContainer">
            <AdminDashContentHeader mData={data} mMode ={mode}/>
            <DashCourseList courses= {courses} isAdmin= {true} API_URL={API_URL}/>
          </div>
        </div>
    </div>
  )
}

export default AdminDashBoard
