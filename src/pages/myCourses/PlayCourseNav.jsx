import React, { useState, useEffect } from 'react'
import itflogo from '../../assets/itf_log.png';
import profile from '../../assets/dashboard/profile.svg'
import arrow from '../../assets/dashboard/arrow.svg'
import '../homePage/NavBar.css';
import '../dashBoard/DashBoard.css'
import { Link, useNavigate } from 'react-router-dom';


function PlayCourseNav() {
    const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  function logoutUser(params) {
    localStorage.setItem('userData', null);
    setUserData(null)
    navigate('/')
  }


  useEffect(() => {
    const user = localStorage.getItem('userData');
    setUserData(JSON.parse(user));
  }, [])

    return (
        <div className='nav-bar'>         
            <div className='mylogo'>
                <Link to='/' className='links'>
                    <img src={itflogo} alt="itflogo" style={{width:'70px', height:'70px', padding:'5px 5px'}}/>
                </Link>                
            </div>
            <nav className='nav'>
                <ul className='content'>
                <Link to='/' className='links'>        
                    <li>Home</li>
                </Link>
                <Link to='/about' className='links'>        
                    <li>About</li>
                </Link>
                <Link to='/dash-board'className='links'>        
                    <li>Course</li>
                </Link>
                <Link to='/profile-page'className='links'>        
                    <li>Profile</li>
                </Link>
                <Link to='/contact-page'className='links'>
                    <li>Contact</li> 
                </Link>                  
                </ul>
            </nav>
            <div className='userpro'>
                <h3>welcome, {userData?.fullName}</h3>
                <div className='prodiv'>
                    <img src={profile} alt='profileicon' style={{width:'30px'}}/>
                    <img src={arrow} alt='arrowdown' style={{width:'30px'}} className='arrowhov'/>
                    <div className='droplogout'>
                    <h4 onClick={logoutUser} style={{cursor: 'pointer'}}>Logout</h4>
                    </div>  
                </div>
            </div>
        </div>
     )
}

export default PlayCourseNav