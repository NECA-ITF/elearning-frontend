import React from 'react';
import'./ProfilePage.css';
import SideBar from './SideBar';
import {IdentificationBadge,Envelope,Phone,User} from "phosphor-react"
function ProfilePage() {

  return (
    <div className="Profile-con">
        <SideBar />
        <div className=" Profile-main">
          <div className='Profile'>  
            <div className='profile-img'>
            <User size={85} weight="thin" />
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