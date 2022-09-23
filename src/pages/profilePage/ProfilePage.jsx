import'./ProfilePage.css';
import SideBar from './SideBar';
import {IdentificationBadge,Envelope,Phone,User} from "phosphor-react"
import { useState,useEffect } from 'react';
function ProfilePage() {
  const[userData,setUserData] = useState({})
  useEffect(()=>{
    //COLLECTING THE DATA FROM LOCAL STORAGE AND CONVERTING TO AN OBJECT
    const stData = JSON.parse(localStorage.getItem('userData'))
    setUserData({...stData})
  },[])
  const {fullName,email,phoneNumber} = userData
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
                <p className='p-details'>{fullName}</p>
            </div>

            <div className=" profile-border">
            <Envelope size={28} weight="thin" />
                <p>Email</p>
                <p className='p-details p-email'>{email}</p>
            </div>
            
            <div className=" profile-border">
            <Phone size={28} weight="thin" />
                <p>Phone number</p>
                <p className='p-details'>{phoneNumber}</p>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default ProfilePage