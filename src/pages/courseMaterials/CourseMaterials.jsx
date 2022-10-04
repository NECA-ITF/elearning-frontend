import React, { useState, useEffect } from 'react';
import './CourseMaterials.css'
import itflogo from '../../assets/itf_log.png';
import profile from '../../assets/dashboard/profile.svg'
import arrow from '../../assets/dashboard/arrow.svg'
import { Link, useNavigate} from 'react-router-dom';


function CourseMaterials() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate()

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
    <div>
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
                    {
                        userData ? (
                            <Link to='/profile-page' className='links'>        
                                <li>Profile</li>
                            </Link>
                        ):
                        (
                            <Link to='/login' className='links'>        
                                <li>Profile</li>
                            </Link>
                        )
                    }
                    <Link to='/contact-page' className='links'>
                       <li>Contact</li>
                    </Link>   
            </ul>
        </nav>
        <div className='userpro'>
          <h3>{userData ? `Welcome, ${userData.fullName}` : ""}</h3>
          <div className='prodiv'>
            <img src={profile} alt='profileicon' style={{width:'20px'}}/>
            <img src={arrow} alt='arrowdown' style={{width:'20px'}} className='arrowhov'/>
            <div className='droplogout'>
              <h4 onClick={logoutUser} style={{cursor: 'pointer'}}>Logout</h4>
            </div>
            
          </div>
        </div>
      </div>

      <div className='gen-course-mat'>
        <div><a href='https://www.w3schools.com/nodejs/nodejs_intro.asp'>https://www.w3schools.com/nodejs/nodejs_intro.asp</a></div>
        <div><a href='https://frontendmasters.com/learn/node-js/'>https://frontendmasters.com/learn/node-js/</a></div>
        <div><a href='https://github.com/nodejs/node'> https://github.com/nodejs/node</a></div>
        <div><a href='https://www.tutorialspoint.com/nodejs/index.htm'>https://www.tutorialspoint.com/nodejs/index.htm</a></div>
        <div><a href='https://roadmap.sh/nodejs'>https://roadmap.sh/nodejs</a></div>
      </div>
    </div>
  )
}

export default CourseMaterials