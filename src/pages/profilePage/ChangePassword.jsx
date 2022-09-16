import React,{useState} from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import logo from '../../assets/itf_log.png';
import './EditedProfile.css'
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

function ChangePassword(){ 
   
    const[userPasswords,setUserPasswords] = useState({
        oldPassword:'',
        password:'',
        confirmPassword:''
    })

    function handleChangePassword(e){
        const {name,value} = e.target
        setUserPasswords(intialState => ({
            ...intialState,
            [name]:value
        }))
        console.log(userPasswords)
    }
    function handleOnSubmit(e){
        e.preventDefault();
        const {password,confirmPassword} = userPasswords 
        if(password === confirmPassword){
            //proceed running the fetch api to change
        }
        else{
            console.log("password does not match")
        }
    }




  return (
    <div className="mainone">
    <SideBar /> 
    <div className="main1">
        <form onSubmit={handleOnSubmit}>
          <div className='Back1'>

             <div className='profile-img'>
                 <img src={logo} alt="Logo" className='img'/>
             </div>
             <div className="border2" >
                <p>Enter Old Password</p>
                <CustomInput type="password" name= 'oldPassword'   placeholder='XXXXXXXX' style={{width:'100%',height:'1rem', borderRadius:'5rem',border:' 1px solid rgba(255, 135, 135, 0.637)',padding:'1.5rem'}}
                onChange={handleChangePassword}/>
            </div>

            <div className="border2" >
                <p>Create New Password</p>
                <CustomInput type="password" name = 'password'   placeholder='XXXXXXXX' style={{width:'100%',height:'1rem',borderRadius:'5rem',border:' 1px solid rgba(255, 135, 135, 0.637)',padding:'1.5rem'}}
                onChange={handleChangePassword}/>
            </div>

            <div className="border2">
                <p>Re-Enter Password</p>
                <CustomInput type="password" name= 'confirmPassword'  placeholder='XXXXXXXX'  style={{width:'100%',height:'1rem',borderRadius:'5rem',border:' 1px solid rgba(255, 135, 135, 0.637)',padding:'1.5rem'}}  onChange={handleChangePassword}/>
            </div>
            
            <Link to='/profile-page' className='links'>        
            <div className="border2">
                <CustomButton title={'Confirm Password'} style={{width:'100%', height:'1rem',borderRadius:'5rem',padding:'1.5rem'}}/>
            </div> 
            </Link>
        </div>
        </form>
    </div>

    </div>
  
    )
}

export default ChangePassword