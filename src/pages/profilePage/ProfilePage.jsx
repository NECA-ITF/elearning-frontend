import React from 'react';
import'./ProfilePage.css';
import logo from '../../assets/itf_log.png'
import SideBar from './SideBar';
import {IdentificationBadge,Envelope,Phone} from "phosphor-react"



function ProfilePage() {

  return (
    <div className="Profile-con">
        <SideBar />
        <div className=" Profile-main">
          <div className='Profile'>  
            <div className='profile-img'>
                 <img src={logo} alt="Logo" className='img'/>
             </div>

            <div className=" profile-border" >
               <IdentificationBadge size={28} weight="thin" />
                <p>Fullname</p>
            </div>

            <div className=" profile-border">
            <Envelope size={28} weight="thin" />
                <p>Email</p>
            </div>
            
            <div className=" profile-border">
            <Phone size={28} weight="thin" />
                <p>Phone number</p>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default ProfilePage