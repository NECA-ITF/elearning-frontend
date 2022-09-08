import React from 'react'
import img from '../../assets/image2.jpg'
import logo from '../../assets/itf_log.png'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './SignupPage.css'
import { Link } from 'react-router-dom';




function SignupPage() {
  return (
      <div className="smallCont">
        <div className="col-2">
          <img src={img} alt = 'learning' />
          <div className="abs">
            <img src={logo} alt="Logo" className='img'/>
            <h1>Welcome to our E-learning center</h1>
          </div>
        </div>
          <form className='form'>
            <div className="col">          
              <h4>APPLY NOW</h4>
              <p>Sign up and start learning today</p>
              <CustomInput placeholder='FullName*' style = {{width: ' 100%'}} />
              <CustomInput placeholder='Email*' style = {{width: '100%'}} />
              <CustomInput placeholder='Phone Number' style = {{width: '100%'}} />
              <CustomInput placeholder='Password*' type ='password' style = {{width: '100%'}} />
              <CustomInput placeholder='Confirm Password*' type ='password' style = {{width: '100%'}} />
            <Link to='/loginPage' className='links'>
              <CustomButton title = 'SIGN UP' style = {{width: '100%', margin: '8px 0% auto'}} />
            </Link>
            </div>
            <div className='bottom'>
              <h5>By signing up, you agree to our <span>Terms of Use</span> and <span>Privacy Policy </span></h5>
              <p>Already have an account? <span> <Link to='/loginPage' className='links'> Login </Link> </span></p>
            </div>

          </form>
      </div>
  )
}

export default SignupPage