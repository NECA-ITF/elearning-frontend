import React, { useState } from 'react'
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
    <div className='dashcontainer'>
      <div className='dashnav-bar'>
        <div className='dashmylogo'>
          <img src={itflogo} alt="itflogo" style={{width:'60px', height:'60px', padding:'5px 5px'}}/>
        </div>
        <nav className='dashnav'>
            <ul className='dashcontent'>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>   
            </ul>
        </nav>
        <div className='userpro'>
          <h3>welcome, hamidat</h3>
          <div className='prodiv'>
            <img src={profile} alt='profileicon' style={{width:'30px'}}/>
            <img src={arrow} alt='arrowdown' style={{width:'30px'}} className='arrowhov'/>
            <div className='droplogout'>
              <h4>Logout</h4>
            </div>
            
          </div>
        </div>
      </div>
      <div className='dashcustominput'>
        <form className='dashindiv' onSubmit={searchClicked}>
          <CustomInput placeholder="Find a course" className="dashinput" type= 'search' style={{width:'400px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}} onChange={input}/>
          <CustomButton title="search" className="dashbet" style={{width:'100px', height:'41px', padding:'5px 0px', margin:'10px 0px', fontFamily:'BioRhyme, serif'}} type='submit' />
        </form>
      </div>
      <div className='titlediv'>
        <h1>All Courses</h1>
      </div>
      <DashCourseList courses= {searchCourse}/>
    </div>
  )
}

export default DashBoard
