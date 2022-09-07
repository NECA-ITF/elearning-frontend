import React from 'react'
import img from '../../assets/image3.jpg'
import logo from '../../assets/itf_log.png'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './ForgotPassword.css'

function ForgotPassword() {
  return (
   
    <div className="smallContf">
        <div className="col-2f">
          <img src={img} alt = 'Fogot' />
        </div>
          <form className='formf'>
            <div className="colf">
                <div className="flex">
                    <img src= {logo} alt="Logo" />
                    <h1>Eduspot!</h1>        
                </div>
                <h2>Forgot your password?</h2>          
              <p>Enter your username and we’ll help you reset your password.</p>
              <CustomInput placeholder='Email*' style = {{width: '100%'}} />
              <CustomButton title='Reset Password ' style = {{width: '100%', marginTop: '20px'}} />
            </div>
            <div className='bottomf'>
              <h5> Sign In?</h5>
            </div>

          </form>
      </div>
  )
}

export default ForgotPassword