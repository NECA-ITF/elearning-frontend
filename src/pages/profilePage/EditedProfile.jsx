import React from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import logo from '../../assets/itf_log.png';
import './EditedProfile.css'
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"
import { Link } from 'react-router-dom';

function EditedProfile() {

  return (
    <div className="mainone">
    <div className="main3 ">
    <Link to='/profile-page'className='links'>        
        <div  className='veiw2'>
        <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Profile</p>
        </div>
    </Link>

        <div  className='veiw2' >
        <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Settings</p>
        </div>
        
        <div  className='veiw2'>
        <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Change password</p>
        </div>

        <div  className='veiw2'>
        <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Privacy</p>
        </div>
        <Link to='/login'className='links'> 
        <div  className='veiw2'>
        <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Log Out</p>
        </div>
        </Link>

    </div> 
    <div className="main1">
          <div className='Back1'>

             <div className='profile-img'>
                 <img src={logo} alt="Logo" className='img'/>
             </div>

            <div className="border2" >
                <p>Fullname</p>
                <CustomInput   placeholder='Maryam Suleiman' style={{width:'100%',height:'1rem'}}/>
            </div>

            <div className="border2">
                <p>Phone number</p>
                <CustomInput  placeholder='0908755780'  style={{width:'100%',height:'1rem'}}/>
            </div>
            <div className="border2">
                <p>Other Links</p>
                <CustomInput  placeholder='Twitter' style={{width:'100%',height:'1rem'}}/>
                <CustomInput   placeholder='LinkedIn'style={{width:'100%',height:'1rem'}}/>
          
    
            </div>
            <Link to='/profile-page' className='links'>        
            <div className="border2">
                <CustomButton title={'Confirm Changes'} style={{width:'100%', height:'1rem'}}/>
            </div> 
            </Link>
        </div>
    </div>
    </div>
          
          
            
  )
}

export default EditedProfile