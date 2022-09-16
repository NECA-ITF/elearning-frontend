import React,{useState,useEffect} from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom';
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"

function SideBar() {
    const [userData, setUserData] = useState(null);
    function logoutUser(params) {
        localStorage.setItem('userData', null);
        setUserData(null)
    }
    
    
    useEffect(() => {
        const user = localStorage.getItem('userData');
        setUserData(JSON.parse(user));
    }, [])
    //to avoid command never used prompt 

    console.log(userData ? 'user': 'no user')
  return (
    <div className="Sidebar-con ">
         <div  className='sidebar-icon'>
                <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>DashBoard</p>
          </div>
          
        <Link to='/profile-page' className='links'>        
            <div  className='sidebar-icon'>
                <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Profile</p>
            </div>
        </Link>

        <Link to="/edited-profile" className='links' >
            <div  className='sidebar-icon' >
                <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Edit Profile</p>
            </div>
         </Link>

         <Link to='/change-password' className='links'>
             <div  className='sidebar-icon'>
                <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Change password</p>
            </div>
        </Link>
        
             <div  className='sidebar-icon'>
            <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Privacy</p>
             </div>
        
        <Link to='/login'className='links' onClick={logoutUser}> 
                <div  className='sidebar-icon'>
                <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin"  />
                <p>Log Out</p>
                  </div>
        </Link>
    </div> 

  )
}

export default SideBar
