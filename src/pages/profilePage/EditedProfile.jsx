import React from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './EditedProfile.css'
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"
// import NavBar from './NavBar'
function EditedProfile() {

  return (
    <div className="mainone">
    <div className="main2">
        <div  className='veiw'>
        <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Profile</p>
        </div>

        <div  className='veiw' >
        <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Settings</p>
        </div>

        <div  className='veiw'>
        <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Change password</p>
        </div>

        <div  className='veiw'>
        <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Privacy</p>
        </div>
        <div  className='veiw'>
        <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Log Out</p>
        </div>

    </div> 
    <div className="main">
          <div className='Back'>

            <div className="border" >
                <p>Fullname</p>
                <CustomInput style={{width:'100%',height:'1rem'}}/>
            </div>

            <div className="border">
                <p>Phone number</p>
                <CustomInput  style={{width:'100%',height:'1rem'}}/>
            </div>
            <div className="border">
                <p>Other Links</p>
                <CustomInput  style={{width:'100%',height:'1rem'}}/>
                <CustomInput  style={{width:'100%',height:'1rem'}}/>
          
    
            </div>
            <div className="border">
              <p>Con</p>
                <CustomButton style={{width:'100%', height:'1rem'}}/>
                
            </div> 
        </div>
    </div>
    </div>
          
          
            
  )
}

export default EditedProfile