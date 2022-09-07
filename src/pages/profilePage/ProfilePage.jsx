import React from 'react';
import'./ProfilePage.css';
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"

function ProfilePage() {
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