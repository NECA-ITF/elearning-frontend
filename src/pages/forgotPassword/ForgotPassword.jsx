import React, { useState } from 'react'
import img from '../../assets/image3.jpg'
import logo from '../../assets/itf_log.png'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './ForgotPassword.css'
import { Link } from 'react-router-dom';


function ForgotPassword({ API_URL }) {
  const [userData, setUserData] = useState({});

  const updateUserData = (event) => {
    const {name, value} = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
    // console.log(userData);
  }

  const getVideos = async (event) => {
    event.preventDefault();

    const { password, confirmPassword } = userData;
    if (password !== confirmPassword)
      return alert("passwords don't match");

    let userData2 = userData;
    delete userData2["confirmPassword"];
    setUserData(userData2)
    console.log(userData);

    fetch(`${API_URL}/auth/forgottenpassword`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    // .then((data) => {
    //   if (data.success) navigate("/login")
    // })
  }

  return (
   
    <div className="smallContf">
          <form className='formf' onSubmit={getVideos}>
            <div className="colf">
                <div className="flex">
                    <img src= {logo} alt="Logo" />
                    <h1>Eduspot</h1>        
                </div>
                <h2>Forgot your password?</h2>          
              <p>Enter your email and new password and we’ll help reset your password.</p>
              <CustomInput required={true} name="email" onChange={updateUserData} placeholder='Email*' style = {{width: '100%'}} />
              <CustomInput required={true} name="password" onChange={updateUserData} placeholder='New password*' style = {{width: '100%'}} />
              <CustomInput required={true} name="confirmPassword" onChange={updateUserData} placeholder='Confirm new password*' style = {{width: '100%'}} />
              {/* <Link to='/login'className='links'> */}
              <CustomButton title='Reset Password ' style = {{width: '100%', marginTop: '20px'}} />
              {/* </Link> */}
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