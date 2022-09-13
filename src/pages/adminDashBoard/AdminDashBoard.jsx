import React,{useState} from 'react'
import './AdminDashBoard.css'
import courses from '../dashBoard/data.json'
import DashCourseList from '../dashBoard/DashCourseList'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'


function AdminDashBoard() {
    const [searchInput, setSearchInput]= useState("")
    const [searchCourse, setSearchCourse]= useState(courses)
    const input= (event)=>{
    setSearchInput(event.target.value)

  }
  const searchClicked = (event) => {
    event.preventDefault();
    const filteredCourses = courses.filter(course=>(
      course.title.toLowerCase().includes(searchInput.toLowerCase())
    ))
    setSearchCourse([...filteredCourses])
  }
  return (

    <div className='adminDashContainer'>
        <AdminDashSide />
        <div id='adminDash-right'>
          <AdminDashContentHeader />
          <DashCourseList courses= {searchCourse} isAdmin= {true}/>
        </div>
    </div>
  )
}

export default AdminDashBoard
