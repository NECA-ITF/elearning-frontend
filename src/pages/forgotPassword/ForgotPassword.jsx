import React from 'react'
import img from '../../assets/image3.jpg'
import logo from '../../assets/itf_log.png'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './ForgotPassword.css'
import { Link } from 'react-router-dom';


function ForgotPassword() {
  return (
   
    <div className="smallContf">
          <form className='formf'>
            <div className="colf">
                <div className="flex">
                    <img src= {logo} alt="Logo" />
                    <h1>Eduspot</h1>        
                </div>
                <h2>Forgot your password?</h2>          
              <p>Enter your username and we’ll help you reset your password.</p>
              <CustomInput placeholder='Email*' style = {{width: '100%'}} />
              <Link to='/login'className='links'>
              <CustomButton title='Reset Password ' style = {{width: '100%', marginTop: '20px'}} />
              </Link>
            </div>
            <div className='bottomf'>
             
              <Link to='/login' className='links'>
              <h5> Log In?</h5>
              </Link>
            </div>

          </form>
          <div className="col-2f">
          <img src={img} alt = 'Fogot' />
        </div>
      </div>
  )
}

export default ForgotPassword