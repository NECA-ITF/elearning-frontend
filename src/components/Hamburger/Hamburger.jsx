import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './Hamburger.css'
import { Link, useNavigate} from 'react-router-dom';

function Hamburger() {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate()

    function logoutUser(params) {
        localStorage.setItem('userData', null);
        toast.success(`Logged Out  Sucessful`, {
          position: toast.POSITION.TOP_RIGHT
        })
        setUserData(null)
        navigate('/')
      }
    
      useEffect(() => {
        const user = localStorage.getItem('userData');
        setUserData(JSON.parse(user));
      }, [])

  return (
    <div>
      <div className='ham-index'>
      <input type="checkbox" className='res-inp'/>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                {/* <List size={50} /> */}
                <ul className='hamburger'>
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
                    <li>
                    {userData ? `${userData.fullName}` : ""}
                    </li>
                    {
                        userData ? (
                            <li onClick={logoutUser}>Logout</li>   
                        ): 
                        <Link to='/login' className='links'>        
                                <li>login</li>
                            </Link>
                    }
                </ul><input type="checkbox" className='res-inp'/>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                {/* <List size={50} /> */}
                <ul className='hamburger'>
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
                    <li>
                    {userData ? `${userData.fullName}` : ""}
                    </li>
                    {
                        userData ? (
                            <li onClick={logoutUser}>Logout</li>   
                        ): 
                        <Link to='/login' className='links'>        
                                <li>login</li>
                            </Link>
                    }
                </ul>
      </div>
    </div>
  )
}

export default Hamburger
