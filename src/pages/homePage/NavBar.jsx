import React from 'react'
import itflogo from '../../assets/itf_log.png';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
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
                        <li className='ho'> Home</li>
                    </Link>
                    <Link to='/about' className='links'>        
                        <li>About</li>
                    </Link>
                    <Link to='/dashBoard' className='links'>        
                        <li>Course</li>
                    </Link>
                    <Link to='/profilePage' className='links'>        
                        <li>Profile</li>
                    </Link>
                        <li>Contact</li>
                        
                    </ul>
                </nav>
                <Link to='/loginPage' className='links'>
                    <div className='apply'>
                    <p> LOGIN </p>
                </div>
                </Link>
        </div>
     )
}

export default NavBar