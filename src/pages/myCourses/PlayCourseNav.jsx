import React from 'react'
import itflogo from '../../assets/itf_log.png';
import '../homePage/NavBar.css';
import { Link } from 'react-router-dom';


function PlayCourseNav() {
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
                    <Link to='/contact-page' className='links'>
                        <li>Contact</li>
                    </Link>  
                    </ul>
                </nav>
                <div className='apply'>
            <Link to='/login'className='links'><p>Log Out</p></Link>
                </div>
        </div>
     )
}

export default PlayCourseNav