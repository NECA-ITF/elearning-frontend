import React,{useState} from 'react'
import './AdminDashBoard.css'
import CustomButton from '../../components/customButton/CustomButton'
import courses from '../dashBoard/data.json'
import DashCourseList from '../dashBoard/DashCourseList'
import { Link } from 'react-router-dom'



function AdminDashBoard() {
    const [searchInput, setSearchInput]= useState("")
  const [searchCourse, setSearchCourse]= useState(courses)
  const input= (event)=>{
    
    // const inp =  
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
    <div id='adminDash'>
            <div id='adminDash-left'>
                <div id='admDashmarginTop'> 
               <CustomButton title="All Courses" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                     <Link to ='/admin-dashboard'> <CustomButton title="All Outline" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/></Link>
                     <CustomButton title="All Users" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                </div>
                
            </div>
            <div id='adminDash-right'>
            <DashCourseList courses= {searchCourse} isAdmin= {true}/>
        
             </div>
    </div>
  )
}

export default AdminDashBoard
