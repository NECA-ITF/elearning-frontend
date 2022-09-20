import React, { useEffect,useState} from 'react';
import'./ProfilePage.css';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import {IdentificationBadge,Envelope,Phone,User} from "phosphor-react"
function ProfilePage() {
  const navigate = useNavigate()
  const [localStorageData,setLocalStorageData] = useState(null)
  useEffect(()=>{
    setLocalStorageData(JSON.parse(localStorage.getItem('userData')))
    if(localStorageData === null) navigate('/login')
  },[])
  

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