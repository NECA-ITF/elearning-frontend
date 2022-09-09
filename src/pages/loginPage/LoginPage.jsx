import React from 'react'
import img from '../../assets/image2.jpg';
import logo from '../../assets/itf_log.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import './LoginPage.css'
import { Link } from 'react-router-dom';



function LoginPage() {
  return (
  
    <div className="smallContl">
          <form className='forml'>
            <div className="coll">          
              <h1>Login</h1>
              <CustomInput placeholder='Email*' style = {{width: '100%'}} />
              <CustomInput placeholder='Password*' type ='password' style = {{width: '100%'}} />
              <Link to='/dash-board' className='links'>
              <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}} />
              </Link>
              <Link to='/forgot-password' style = {{textDecoration: 'none'}}>
                <p style={{marginBottom: 'none'}}> Forgot password?</p>
              </Link>
              <div className='bottoml' style={{marginTop: 'none', textAlign: 'left'}}> 
                <h5>Don't have an account? <span> <Link to='/signup' style = {{textDecoration: 'none'}}> Sign Up </Link> </span></h5>
              </div>
            </div>
          </form>
        <div className="col-2l">
          <img src={img} alt = 'learning' />
          <div className="absl">
            <div className="flexl">
              <img src={logo} alt="Logo" className='imgl'/>
              <p>Eduspot</p>
            </div>
            <h1>Welcome Back!</h1>
          </div>
        </div>
      </div>  
    )
}

export default LoginPage