import React from 'react'
import img from '../../assets/image2.jpg';
import logo from '../../assets/itf_log.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import './LoginPage.css'
function LoginPage() {
  return (
    <div className="smallContl">
        <div className="col-2l">
          <img src={img} alt = 'learning' />
          <div className="absl">
            <img src={logo} alt="Logo" className='imgl'/>
            <h1>Welcome Back to another great E-learning session</h1>
          </div>
        </div>
          <form className='forml'>
            <div className="coll">          
              <h1>Login into your account</h1>
              <CustomInput placeholder='Email*' style = {{width: '100%'}} />
              <CustomInput placeholder='Password*' type ='password' style = {{width: '100%'}} />
              <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}} />
              <p style={{marginBottom: 'none'}}>Forgot password?</p>
              <div className='bottoml' style={{marginTop: 'none', textAlign: 'left'}}> 
                <h5>Don't have an account? <span>Login</span></h5>
              </div>
            </div>
          </form>
      </div>  
    )
}

export default LoginPage