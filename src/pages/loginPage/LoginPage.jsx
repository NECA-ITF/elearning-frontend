import React, {useState} from 'react'
import { toast } from 'react-toastify'
import img from '../../assets/image2.jpg';
import logo from '../../assets/itf_log.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';



function LoginPage({ API_URL }) {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })


  function updateLoginPage(e){
    const {name, value} = e.target
    setUserInfo(intitialUserInfo =>({
      ...intitialUserInfo, [name]:value
    }))
  }
  // 
  

  function getUserData(e){
    e.preventDefault()
      fetch(`${API_URL}/auth/user/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.success){
          localStorage.setItem("userData", JSON.stringify(data.user))
          localStorage.setItem('auth',JSON.stringify({token:true}))
          toast.success(`${(data.message)}`, {
            position: toast.POSITION.TOP_RIGHT
        })
        }else{
          localStorage.setItem("userData", null)
          toast.error(`${(data.message)}`, {
            position: toast.POSITION.TOP_RIGHT
        })
        }
        if(data.user){
          if(data.user.isAdmin){
            return navigate('/admin-dash');
          }else{
            return navigate("/dash-board")
          }
        }

      })
  }

  return (
    <div className="smallContl">
          <form className='forml' onSubmit={getUserData}>
            <div className="coll"> 
            <Link to='/' className='links'>
                <div className="logmob">
                  <img src={logo} alt="Logo" className='mob-img'/>
                </div>
              </Link>  
              <h1>Login</h1>
              <CustomInput placeholder='Email*' name="email" style = {{width: '100%'}} onChange={updateLoginPage}/>
              <CustomInput placeholder='Password*' name="password" type ='password' style = {{width: '100%'}} onChange={updateLoginPage}/>
              {/* <Link to='/dash-board' className='links'> */}
              <CustomButton title = 'LOG IN' style = {{width: '100%', margin: '8px 0% 0'}}  />
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
          <img src={img} alt = 'learning' className='img' />
          <div className="absl">
            <div className="flexl">
              <Link to='/' className='links'>
                <img src={logo} alt="Logo" className='imgl'/>
              </Link>
              <p>Eduspot</p>
            </div>
            <h1>Welcome Back!</h1>
          </div>
        </div>
      </div>  
    )
}

export default LoginPage