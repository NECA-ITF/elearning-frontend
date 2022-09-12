import React, { useState, useEffect } from 'react';
import itflogo from '../../assets/itf_log.png';
import profile from '../../assets/dashboard/profile.svg'
import './DashBoard.css'
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput'
import DashCourseList from './DashCourseList';
import arrow from '../../assets/dashboard/arrow.svg'
import { Link } from 'react-router-dom';

function DashBoard() {
  const [searchInput, setSearchInput]= useState("")
  const [courses, setCourses]= useState([])
  const [searchCourse, setSearchCourse]= useState([])
  const [userData, setUserData] = useState(null);

  const input= (event)=>{
    
    // const inp =  
    setSearchInput(event.target.value)
    
  }
  const searchClicked = (event) => {
    event.preventDefault();
    const filteredCourses = courses.filter(course=>(
      course.title.toLowerCase().includes(searchInput.toLowerCase())
      ))
      // console.log(filteredCourses)
    setSearchCourse([...filteredCourses])
  }

  function logoutUser(params) {
    localStorage.setItem('userData', null);
    setUserData(null)
  }

  useEffect(() => {
    fetch('http://192.168.1.2:5000/api/courses')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setCourses(data.courses))
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const user = localStorage.getItem('userData');
    setUserData(JSON.parse(user));
  }, [])

  

  return (
    <div className='dashcontainer'>
      <div className='dashnav-bar'>
        <div className='dashmylogo'>
          <img src={itflogo} alt="itflogo" style={{width:'60px', height:'60px', padding:'5px 5px'}}/>
        </div>
        <nav className='dashnav'>
            <ul className='dashcontent'>
                    <Link to='/' className='links'>
                        <li className='ho'> Home</li>
                    </Link>
                    <Link to='/about' className='links'>        
                        <li>About</li>
                    </Link>
                    <Link to='/dash-board' className='links'>        
                        <li>Course</li>
                    </Link>
                    <Link to='/profile-page' className='links'>        
                        <li>Profile</li>
                    </Link>
                    <Link to='/contact-page' className='links'>
                       <li>Contact</li>
                    </Link>   
            </ul>
        </nav>
        <div className='userpro'>
          <h3>welcome, {userData?.fullName}</h3>
          <div className='prodiv'>
            <img src={profile} alt='profileicon' style={{width:'20px'}}/>
            <img src={arrow} alt='arrowdown' style={{width:'20px'}} className='arrowhov'/>
            <div className='droplogout'>
              <h4 onClick={logoutUser} style={{cursor: 'pointer'}}>Logout</h4>
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
      <DashCourseList courses= {searchCourse.length ? searchCourse :  courses} />
    </div>
  )
}

export default DashBoard

