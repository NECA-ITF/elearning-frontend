import React, { useState } from 'react'
import img from '../../assets/image3.jpg'
import logo from '../../assets/itf_log.png'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './ForgotPassword.css'
import { Link, useNavigate } from 'react-router-dom';


function ForgotPassword({ API_URL }) {
  const [userData, setUserData] = useState({});
  const [securityPhase, setSecurityPhase] = useState(1);
  const [securityQuestion, setSecurityQuestion] = useState('');
  const navigate = useNavigate();

  const updateUserData = (event) => {
    const {name, value} = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
    // console.log(userData);
  }

  const validateEmail = async (event) => {
    event.preventDefault();
    

    let response = await fetch(`${API_URL}/auth/validateEmail`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(userData)
    })
    response = await response.json();
    if (response.success){
      setSecurityQuestion(response.securityQuestion);
      setSecurityPhase(phase => (phase + 1));
    }
  }

  const resetPassword = async (event) => {
    event.preventDefault();
    const { newPassword, confirmNewPassword } = userData;
    if (newPassword !== confirmNewPassword)
      return alert("passwords don't match");

    let userData2 = userData;
    delete userData2["confirmNewPassword"];
    setUserData(userData2)

    fetch(`${API_URL}/auth/forgottenpassword`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((res) => {
      alert(res.message);
      if (res.success) navigate("/login")
    })
  }
  function changePhase(phase){
    if (phase > securityPhase) return;

    setSecurityPhase(phase);
  }
  return (
   
    <div className="smallContf">
          <form className='formf' onSubmit={ securityPhase === 1 ? validateEmail : resetPassword }>
            <div className="colf">
                <div className="flex">
                    <img src= {logo} alt="Logo" />
                    <h1>Eduspot</h1>        
                </div>
                <h2>Forgot your password?</h2>   
                <div style={{height: "30px", width: "80%", borderBottom: "2px solid white", display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "auto", marginRight: "auto"}} >
                  <p style={{borderRadius: "50%", border: "1px solid white", height: "30px", width: "30px", fontWeight: "bold", backgroundColor: securityPhase >= 1 ? "green" : "#202c46", cursor: "pointer"}} onClick={() => { changePhase(1) }} >1</p>
                  <p style={{borderRadius: "50%", border: "1px solid white", height: "30px", width: "30px", fontWeight: "bold", backgroundColor: securityPhase >= 2 ? "green" : "#202c46", cursor: "pointer"}} onClick={() => { changePhase(2) }} >2</p>
                </div>       
              {
                securityPhase === 1 ? 
                <>
                <p>Please enter your email</p>
                  <CustomInput required={true} name="email" value={userData.email} onChange={updateUserData} placeholder='Email*' style = {{width: '100%'}} />
                </>
              :
              <>
                <p>{securityQuestion}</p>
                <CustomInput required={true} name="answer" value={userData.answer} onChange={updateUserData} placeholder='Answer*' style = {{width: '100%'}} />
                <CustomInput required={true} name="newPassword" value={userData.newPassword} onChange={updateUserData} placeholder='New password*' style = {{width: '100%'}} type="password" />
                <CustomInput required={true} name="confirmNewPassword" value={userData.confirmNewPassword} onChange={updateUserData} placeholder='Confirm new password*' style = {{width: '100%'}} type="password" />
              </>
              }
              {/* <Link to='/login'className='links'> */}
              <CustomButton title={securityPhase === 1 ? 'Confirm Email' : 'Reset Password'} style = {{width: '100%', marginTop: '20px'}} />
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