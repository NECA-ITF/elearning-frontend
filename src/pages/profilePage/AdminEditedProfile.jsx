import React from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import logo from '../../assets/itf_log.png';
import './AdminEditedProfile.css'
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

function AdminEditedProfile() {
  return (
    <div>
         <div className="AdminEdit-con">
        <SideBar />
        <div className="Admin-main">
            <form action="" >
            <div className='Admin'>
            
                <div className='Admin-img'>
                    <img src={logo} alt="Logo" className='img'/>
                </div>

                <div className="Adminborder2" >
                    <p>Fullname</p>
                    <CustomInput placeholder='Maryam Suleiman' name="fullName" style={{width:'100%',height:'1rem'}} />
                </div>

                <div className="Adminborder2">
                    <p>Phone number</p>
                    <CustomInput  placeholder='0908755780' name="phoneNumber"  style={{width:'100%',height:'1rem'}} />
                </div>
                <div className="Adminborder2">
                    <p>Other Links</p>
                    <CustomInput  placeholder='Twitter' name="twitter" style={{width:'100%',height:'1rem'}} />
                    <CustomInput   placeholder='LinkedIn' name="linkedIn"style={{width:'100%',height:'1rem'}} />
            
        
                </div>
                <Link to='/profile-page' className='links'>        
                <div className="Adminborder2">
                    <CustomButton title={'Confirm Changes'} type='submit' style={{width:'100%', height:'1rem'}}/>
                </div> 
                </Link>
            </div>
            </form>
        </div>
    </div>
          

    </div>
  )
}

export default AdminEditedProfile