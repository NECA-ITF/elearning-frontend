import React, { useEffect } from 'react'
import img from '../../assets/image2.jpg';
import logo from '../../assets/itf_log.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import './LoginPage.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';



function LoginPage() {
  
const navigate = useNavigate
const [userData, setUserData]= useState()

function httpLoginUser(e){
  e.preventDefault()
  const userData= {
    _id: '1',
    fullName: "John Doe",
    email: "John@email.com",
    phoneNumber: '08163764664',
    password: '12345',
    isAdmin: false
  }
  if(!userData._id) return;
  localStorage.setItem('userData', JSON.stringify(userData))
  Navigate('/dashboard')
}

useEffect(()=>{
  // localStorage.setItem('userData', null)
  const user= localStorage.getItem('userData')
  if (!user){
    setUserData(null);
    return;
  }
  setUserData(JSON.parse(user))
}, [userData])

if (userData){
  return<Navigate to='/dashBoard' replace={true}/>
}

  return (
  
    <div className="smallContl">
        <div className="col-2l">
          <img src={img} alt = 'learning' />
          <div className="absl">
            <img src={logo} alt="Logo" className='imgl'/>
            <h1>Welcome Back!</h1>
          </div>
        </div>
          <form className='forml' onSubmit={httpLoginUser}>
            <div className="coll">          
              <h1>Login into your account</h1>
              <CustomInput placeholder='Email*' style = {{width: '100%'}} />
              <CustomInput placeholder='Password*' type ='password' style = {{width: '100%'}} />
              <CustomButton title = 'LOG IN' type='submit' style = {{width: '100%', margin: '8px 0% 0'}} />
              <Link to='/forgotPassword'>
              <p style={{marginBottom: 'none'}}> Forgot password?</p>
              </Link>
              <div className='bottoml' style={{marginTop: 'none', textAlign: 'left'}}> 
                <h5>Don't have an account? <span> <Link to='/signupPage'> Sign Up </Link> </span></h5>
              </div>
            </div>
          </form>
      </div>  
    )
}

export default LoginPage