import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom';
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"

function SideBar() {
  return (
    <div className="main3 ">
        <Link to='/profile-page' className='links'>        
            <div  className='veiw2'>
                <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Profile</p>
            </div>
        </Link>
        <Link to="/edited-profile" className='links' >
            <div  className='veiw2' >
                <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Edit Profile</p>
            </div>
        </Link>
        <Link to='/change-password' className='links'>
            <div  className='veiw2'>
                <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Change password</p>
            </div>
        </Link>
        
        <div  className='veiw2'>
            <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Privacy</p>
        </div>
        
        <Link to='/login'className='links'> 
            <div  className='veiw2'>
                <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin"  />
                <p>Log Out</p>
            </div>
        </Link>
    </div> 

  )
}

export default SideBar
