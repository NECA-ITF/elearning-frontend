import React, {useState} from 'react'
import img from '../../assets/image2.jpg';
import logo from '../../assets/itf_log.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';



function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })
<<<<<<< HEAD
const navigate = useNavigate()
function updateLoginPage(e){
  const {name, value} = e.target
  setUserInfo(intitialUserInfo =>({
    ...intitialUserInfo, [name]:value
  }))
}
function getUserData(e){
  e.preventDefault()
  fetch('http://192.168.1.2:5000/auth/user/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then((res) => {
    console.log(res)
    // if (res.ok) navigate("/dash-board")
  })
 }
=======

  const navigate = useNavigate()

  function updateLoginPage(e){
    const {name, value} = e.target
    setUserInfo(intitialUserInfo =>({
      ...intitialUserInfo, [name]:value
    }))
  }

  function getUserData(e){
    e.preventDefault()
    fetch('http://192.168.1.2:5000/auth/user/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) navigate("/dash-board")

    })
  }
>>>>>>> 82ce84b63a9430031de8b5be63b96ce994141dcd

  return (
    <div className="smallContl">
          <form className='forml' onSubmit={getUserData}>
            <div className="coll">          
              <h1>Login</h1>
<<<<<<< HEAD
              <CustomInput placeholder='Email*' name="email" style = {{width: '100%'}} />
              <CustomInput placeholder='Password*' name="password" type ='password' style = {{width: '100%'}} />
              {/* <Link to='/dash-board' className='links'> */}
              <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}} />
=======
              <CustomInput placeholder='Email*' name="email" style = {{width: '100%'}} onChange={updateLoginPage}/>
              <CustomInput placeholder='Password*' name="password" type ='password' style = {{width: '100%'}} onChange={updateLoginPage}/>
              {/* <Link to='/dash-board' className='links'> */}
              <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}}  />
>>>>>>> 82ce84b63a9430031de8b5be63b96ce994141dcd
              {/* </Link> */}
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