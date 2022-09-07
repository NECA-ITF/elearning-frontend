import React from 'react'
import itflogo from '../../assets/itf_log.png';
import './NavBar.css';

function NavBar() {
    return (
            <div className='nav-bar'>
          
                <div className='mylogo'>
                    <img src={itflogo} alt="itflogo" style={{width:'70px', height:'70px', padding:'5px 5px'}}/>
                </div>
                <nav className='nav'>
                    <ul className='content'>
                        <li className='ho'> Home</li>
                        <li>About</li>
                        <li>Course</li>
                        <li>Dashboard</li>
                        <li>Contact</li>
                        
                    </ul>
                </nav>
                <div className='apply'>
                    <p> LOGIN </p>
                </div>
        </div>
     )
}

export default NavBar