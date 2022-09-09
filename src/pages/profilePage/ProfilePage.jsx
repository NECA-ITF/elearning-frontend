<<<<<<< HEAD
import React from 'react'

function ProfilePage() {
  return (
    <div>ProfilePage</div>
=======
import React from 'react';
import'./ProfilePage.css';
import logo from '../../assets/itf_log.png';
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"
import { Link } from 'react-router-dom';


function ProfilePage() {
  return (
    <div className="mainone">
        <div className="main2">
        {<Link to='/edited-profile'className='links'>        
            <div  className='veiw'>
            <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Profile</p>
            </div>
        </Link>}

            <div  className='veiw' >
            <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Settings</p>
            </div>
            <Link to='/change-password'className='links'> 
            <div  className='veiw'>
            <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Change password</p>
            </div>
            </Link>

            <div  className='veiw'>
            <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Privacy</p>
            </div>
            <Link to='/login'className='links'> 
            <div  className='veiw'>
            <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Log Out</p>
            </div>
            </Link>

        </div>
        <div className="main">
          <div className='Back'>
            
            <div className='profile-img'>
                 <img src={logo} alt="Logo" className='img'/>
             </div>
            

            <div className="border" >
                <p>Fullname</p>
            </div>
            <div className="border">
                <p>Email</p>
            </div>
            <div className="border">
                <p>Phone number</p>
            </div>
            <div className="border">
                <p>Gender</p>
            </div>
            <div className="border">
                <p>GitHub Link</p>
            </div> 
        </div>
    </div>
    </div>
>>>>>>> 08c41cf03bbe65b583b957d85a4eb06e91cf34e1
  )
}

export default ProfilePage