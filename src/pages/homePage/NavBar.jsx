import React from 'react'
import itflogo from '../../assets/itf_log.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'

function NavBar() {
    const[userData,setUserData] = useState(null)
    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem('userData')))
    },[])

    return (
            <div className='nav-bar'>
                <div className='mylogo'>
                <Link to='/' className='links'>
                    <img src={itflogo} alt="itflogo" style={{width:'90%', height:'80%', padding:'5px 5px'}}/>
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
                    {/* <Link to='/profile-page' className='links'>        
                        <li>Profile</li>
                    </Link> */}
                    <Link to='/contact-page' className='links'>
                        <li>Contact</li>
                    </Link>    
                    </ul>
                </nav>
                <div className='apply'>
                    {/* {
                    userData ? 
                    (<Link to='/dash-board' className='links'> 
                        <p> Dashboard </p> 
                    </Link>) : 
                    (<Link to='/login' className='links'>
                        <p> LOGIN </p>
                    </Link>)
                    } */}
                </div>
        </div>
     )
}

export default NavBar