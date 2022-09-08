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
                    <Link to='/login'className='links'>        
                        <li>Dashboard</li>
                    </Link>
                        <li>Contact</li>
                        
                    </ul>
                </nav>
                <div className='apply'>
            <Link to='/login'className='links'><p>Log Out</p></Link>
                </div>
        </div>
     )
}

export default PlayCourseNav