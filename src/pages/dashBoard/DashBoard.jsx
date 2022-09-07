import React, { useState } from 'react'
import DashBoardCourse from './DashBoardCourse'
import courses from './data.json'
import itflogo from '../../assets/itf_log.png';
import profile from '../../assets/dashboard/profile.svg'
import './DashBoard.css'
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput'
import DashCourseList from './DashCourseList';
import arrow from '../../assets/dashboard/arrow.svg'

function DashBoard() {
  const [searchInput, setSearchInput]= useState("")
  const [searchCourse, setSearchCourse]= useState([])

  const input= (event)=>{
    const inp = event.target.value 
    setSearchInput(inp)
    console.log(inp)

    const filteredCourses = inp ? courses.filter(course=>(
      course.title.toLowerCase().includes(inp.toLowerCase())
    )):[]
    setSearchCourse([...filteredCourses])
  }

  return (
    <div className='dashcontainer'>
      <div className='dashnav-bar'>
        <div className='dashmylogo'>
          <img src={itflogo} alt="itflogo" style={{width:'60px', height:'60px', padding:'5px 5px'}}/>
        </div>
        <nav className='dashnav'>
            <ul className='dashcontent'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>   
            </ul>
        </nav>
        <div>
          <img src={profile} alt='profileicon' style={{width:'30px'}}/>
          <img src={arrow} alt='arrowdown' style={{width:'30px'}} className='arrowhov'/>
        </div>
      </div>
      <div className='dashcustominput'>
        <div className='dashindiv'>
          <CustomInput placeholder="Find a course" className="dashinput" style={{width:'300px'}} onChange={input}/>
          <CustomButton title="search" className="dashbet" style={{width:'100px', height:'48px', padding:'5px 0px', margin:'10px 0px'}}/>
        </div>
      </div>
      <DashCourseList courses= {searchInput ? searchCourse : courses}/>
    </div>
  )
}

export default DashBoard
