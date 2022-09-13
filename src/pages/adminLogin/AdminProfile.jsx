import React from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import logo from '../../assets/itf_log.png';
import './AdminProfile.css'
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"
import { Link } from 'react-router-dom';

function AdminProfile() {
  return (
    
      <div className="Admin-profile">
            <div className="Admin-sidebar">
                <Link to='/profile-page'className='links'>        
                   <div  className='Admin-icon'>
                   <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                   <p> Dashboard</p>
                   </div>
               </Link>

            <div  className='Admin-icon' >
                <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p> Admin Profile</p>
            </div>
            <Link to='/change-password'className='links'> 
            <div  className='Admin-icon'>
            <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Change password</p>
            </div>
            </Link>

            <div  className='Admin-icon'>
            <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Privacy</p>
            </div>
            <Link to='/login'className='links'> 
            <div  className='Admin-icon'>
            <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin"  />
                <p>Log Out</p>
            </div>
            </Link>

        </div> 
        <div className="main1">
            <form action="" >
            <div className='Back1'>

                <div className='profile-img'>
                    <img src={logo} alt="Logo" className='img'/>
                </div>
                <h2>ADMIN</h2>

                <div className="border3" >
                <User size={40} color='black' style={{ marginRight: '1rem'}} weight="thin" />
                 <p>Name</p> 
                 <div className='bb'>

                 </div>
                </div>
               

                
              
            </div>
            </form>
        </div>
    </div>


  )
}

export default AdminProfile