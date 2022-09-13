import React, {useState} from 'react'
import img from '../../assets/image2.jpg'
import logo from '../../assets/itf_log.png'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './SignupPage.css'
import { Link, useNavigate } from 'react-router-dom';



function SignupPage({ API_URL }) {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })
  const navigate = useNavigate();

  function updateUserdata(e){
    const {value, name} = e.target
    setUserData(initialUserData => ({
      ...initialUserData,
      [name]: value
    }))
    // console.log(userData)
  }
   function sendNewUserData(e){
    e.preventDefault()
    fetch(`${API_URL}/auth/user/register`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) navigate("/login")
    })
   }

  return (
      <div className="smallCont">
          <form className='form' onSubmit={sendNewUserData}>
            <div className="col">          
              <h2>Sign up and start learning today</h2>
              <CustomInput placeholder='FullName*' name="fullName" style = {{width: ' 100%', margin: '0 0 0 0'}} onChange={updateUserdata} />
              <CustomInput placeholder='Email*' name="email" style = {{width: '100%', margin: '2% 0 0 0'}} onChange={updateUserdata}/>
              <CustomInput placeholder='Phone Number' name="phoneNumber" style = {{width: '100%', margin: '2% 0 0 0'}} onChange={updateUserdata}/>
              <CustomInput placeholder='Password*' name="password" type ='password' style = {{width: '100%', margin: '2% 0 0 0'}} onChange={updateUserdata}/>
              <CustomInput placeholder='Confirm Password*' name="confirmPassword" type ='password' style = {{width: '100%', margin: '2% 0 0 0'}} onChange={updateUserdata}/>
            {/* <Link to='/login' className='links'> */}
              <CustomButton title = 'SIGN UP' style = {{width: '100%', margin: '8px 0% auto'}} />
            {/* </Link> */}
            </div>
            <div className='bottoms'>
              <h5>By signing up, you agree to our <span>Terms of Use</span> and <span>Privacy Policy </span></h5>
              <p>Already have an account? <span> <Link to='/login' className='links'> Login </Link> </span></p>
            </div>

          </form>
        <div className="col-2">
          <img src={img} alt = 'learning' />
          <div className="abs">
            <div className="flexs">
                <img src={logo} alt="Logo" className='img'/>
                <p>Eduspot</p>
            </div>
            <h1>Welcome to our E-learning center</h1>
          </div>
        </div>
      </div>
  )
}

export default SignupPage