import React from 'react'
import './EditedProfile.css'
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';


function EditedProfile() {
  return (
    
        
            
        
    <div className="mainone">
    <div className="main2">
        <div>
            <p>Veiw Public Profile</p>
        </div>
        <div>
            <p>Profile</p>
        </div>
        <div>
            <p>Settings</p>
        </div>
        <div>
            <p>Payment</p>
        </div>
        <div>
            <p>Privacy</p>
        </div>
    </div>
<div className="main">
    <nav>
        
    </nav>

    <div className="border " >
        <p>Fullname</p>
        <CustomInput style={{width:200,height:20}}/>
    </div>
    <div className="border ">
        <p>Phone Number</p>
        <CustomInput style={{width:200,height:20}}/>
    </div>
    <div className="border
    ">
        <p>Other links</p>
        <CustomInput style={{width:200,height:20}} placeholder="LinkedIn"/>
        <CustomInput style={{width:200,height:20}} placeholder="Twitter"/>
        <CustomInput style={{width:200,height:20}} placeholder="Facebook"/>
    </div>
    <div className="border ">
    <CustomButton style={{width:200,height:20}}/>
        
    </div>
    
</div>
</div>



    
  )
}

export default EditedProfile