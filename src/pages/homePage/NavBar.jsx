import React from 'react'
import itflogo from '../../assets/itf_log.png';
import './HomePage.css'

function NavBar() {
  return (
    <div>
        
        <div className='nav-bar'>
          <nav className='nav'>
            <img src={itflogo} alt="itflogo" />
            <ul className='content'>
              <li>Home</li>
              <li>About</li>
              <li>Course</li>
              <li>Dashboard</li>
              <li>Contact</li>
              <li><span>Apply Now</span></li>
            </ul>
          </nav>
        </div>
    
    </div>
  )
}

export default NavBar