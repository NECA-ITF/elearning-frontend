import React from 'react';
import'./ProfilePage.css';
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"

function ProfilePage() {
  return (
    <div className="mainone">
    <div className="main2">


        <div  className='veiw'>
        <User size={25} weight="thin" />
            <p>Profile</p>
        </div>

        <div  className='veiw' >
        <Gear size={25} weight="thin" />
            <p>Settings</p>
        </div>

        <div  className='veiw'>
        <Password size={25} weight="thin" />
            <p>Change password</p>
        </div>

        <div  className='veiw'>
        <Lock size={25} weight="thin" />
            <p>Privacy</p>
        </div>
        <div  className='veiw'>
        <SignOut size={25} weight="thin" />
            <p>Log Out</p>
        </div>

    </div>
<div className="main">
    <nav>
        
    </nav>

    <div className="border
    " >
        <p>Fullname</p>
    </div>
    <div className="border
    ">
        <p>Email</p>
    </div>
    <div className="border
    ">
        <p>Phone number</p>
    </div>
    <div className="border
    ">
        <p>Gender</p>
    </div>
    <div className="border
    ">
        <p>GitHub Link</p>
    </div>
</div>
</div>


  )
}

export default ProfilePage