import React from 'react';
import'./ProfilePage.css';
import logo from '../../assets/itf_log.png'
import SideBar from './SideBar';


function ProfilePage() {

  return (
    <div className="mainone">
        <SideBar />
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
  )
}

export default ProfilePage