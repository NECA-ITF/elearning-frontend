import React, { useState, useEffect }  from 'react'
import itflogo from '../../assets/itf_log.png';
import profile from '../../assets/dashboard/profile.svg'
import './DashNav.css'
import { toast } from 'react-toastify'
import { List } from "phosphor-react"
import arrow from '../../assets/dashboard/arrow.svg'
import { Link, useNavigate} from 'react-router-dom';

function DashNav() {

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
    <div className='dashnav-bar'>
        <div className='deskdash'>
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
            <div className='usericons'>
                <h3>
                    {userData ? `Welcome, ${userData.fullName}` : ""}
                </h3>
                <div className='dash-prof'>
                    <img src={profile} alt="profileicon" style={{width:'20px'}}/>
                    <img src={arrow} alt="arrowicon" style={{width:'20px'}} className='dasharrow'/>
                    <div className="dashlog">
                        {
                            userData ? (
                                <h4 onClick={logoutUser} style={{cursor: 'pointer'}}>Logout</h4>
                            ):
                            <Link to='/login' className='links'>
                                <h4 style={{cursor: 'pointer'}}>Login</h4>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
        
        <div className='dashlist'>
            <div className='dashnav-mob'>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
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
        <div>
        </div>
    </div>
  )
}

export default DashNav
