import React, {useState} from 'react'
import img from '../../assets/image2.jpg'
import logo from '../../assets/itf_log.png'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './SignupPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import validator from 'validator'




function SignupPage({ API_URL }) {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })
  const navigate = useNavigate();
  const [nameStyle, setNameStyles] = useState({
    width: '100%',
    margin: '0 0 0 0',
    border: ''
   })
  const [passStyle, setPassStyles] = useState({
    width: '100%',
    margin: '2% 0 0 0',
    border: ''
   })
  const [securityStyle, setSecurityStyle] = useState({
    width: '100%',
    margin: '2% 0 0 0',
    border: ''
   })
  const [answerStyle, setAnswerStyle] = useState({
    width: '100%',
    margin: '2% 0 0 0',
    border: ''
   })
  const [phoneStyle, setPhoneStyle] = useState({
    width: '100%',
    margin: '2% 0 0 0',
    border: ''
   })
  const [conpasStyle, setConpasStyle] = useState({
    width: '100%',
    margin: '2% 0 0 0',
    border: ''
   })
  const [emailStyle, setEmailStyle] = useState({
    width: '100%',
    margin: '2% 0 0 0',
    border: ''
   })

  const redBorder = {
  width: '100%',
  margin: '2% 0 0 0',
  border: '2px solid red'
  }
  const greenBorder = {
  width: '100%',
  margin: '2% 0 0 0',
  border: '2px solid green'
  }
   
  const [isnameValid, setNameIsValid] = useState(false);
  const [isemailValid, setEmailIsValid] = useState(false);
  const [isphoneValid, setPhoneIsValid] = useState(false);
  const [ispassValid, setPassIsValid] = useState(false);


   function updateUserdata(e){
     const {value, name} = e.target
     setUserData(initialUserData => ({
       ...initialUserData,
       [name]: value
      }))
      
      // console.log(userData)
    }
    const check = Object.is(userData.password,userData.confirmPassword)
    function validFullname(){
      if(userData.fullName.length === 0){
        setNameStyles({...redBorder})
        setNameIsValid(false)
        toast.warn(`Full Name Required`, {
          position: toast.POSITION.TOP_RIGHT
      })
    }else{
      setNameStyles({...greenBorder})
      setNameIsValid(true)
      }
    }
    function validEmail(){
      //check for email
      const emailvalidate = validator.isEmail(userData.email)
      if(userData.email.length === 0){
        setEmailStyle({...redBorder})
        setEmailIsValid(false)
        toast.warn("Email Required ", {
          position: toast.POSITION.TOP_RIGHT
        })
      }else{
        if(emailvalidate){
          setEmailStyle({...greenBorder})
          setEmailIsValid(true)
        }else{
          setEmailStyle({...redBorder})
          setEmailIsValid(false)
          toast.warn("Invalid Email", {
            position: toast.POSITION.TOP_RIGHT
          })
        }
      }
    }
    function validPhone(){
      //check the phone number
      if(userData.phoneNumber.length !== 11){
        setPhoneStyle({...redBorder})
        setPhoneIsValid(false)
        toast.warn("Phone Number not up eleven", {
          position: toast.POSITION.TOP_RIGHT
        })
      }else{
        if(validator.isNumeric(userData.phoneNumber)){
          setPhoneStyle({...phoneStyle, border: '2px solid green'})
          setPhoneIsValid(true)
        }else{
          setPhoneStyle({...redBorder})
          setPhoneIsValid(false)
          toast.warn("Invalid Number", {
            position: toast.POSITION.TOP_RIGHT
          })
        }
      }
    }
    function validPassword(){
      //check for password
      let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  
      if(strongPassword.test(userData.password)){
        //set the border to green
        setPassStyles({...greenBorder})
        setPassIsValid(true)
        //check for confirm password
        if(check){
          setConpasStyle({...greenBorder})
          setPassIsValid(true)
        }else{
          setConpasStyle({...redBorder})
          setPassIsValid(false)
        }
        
      }else{
        //set the border to red
        setPassStyles({...redBorder})
        setPassIsValid(false)
        toast.warn("Password is not strong enough", {
          position: toast.POSITION.TOP_RIGHT
        })
      }
      
    }

  function sendNewUserData(e){
    e.preventDefault()
    validFullname();
    validEmail();
    validPhone();
    validPassword();
    const {password, confirmPassword} = userData;
    if (password !== confirmPassword){
      return toast.warn("passwords don't match", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    if(isemailValid && isnameValid && ispassValid && isphoneValid){
      // return console.log(userData)
      fetch(`${API_URL}/auth/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.success){
          navigate("/waiting-page")
        }else{
          toast.error(`${data.message}`, {
            position: toast.POSITION.TOP_RIGHT
          })
        }
      })
    }
   }
  
  return (
      <div className="smallCont">
          <form className='form' onSubmit={sendNewUserData}>
            <div className="col"> 
               <Link to='/' className='links'>
                <div className="signmob">
                  <img src={logo} alt="Logo" className='signmob-img'/>
                </div>
              </Link>        
              <h2>Sign up and start learning today</h2>
              <CustomInput placeholder='FullName*' name="fullName" style = {nameStyle} onChange={updateUserdata} />
              <CustomInput placeholder='Email*' name="email" style = {emailStyle} onChange={updateUserdata}/>
              <CustomInput placeholder='Phone Number' name="phoneNumber" style = {phoneStyle} onChange={updateUserdata}/>
              <select name="securityQuestion" id="questions" value={userData.securityQuestion} onChange={updateUserdata} required>
                  <option selected value="">Security Question*</option>

                  <option value="What was your childhood nickname?">
                    What was your childhood nickname?
                  </option>

                  <option value="What is your mother's maiden name?">
                    What is your mother's maiden name?
                  </option>

                  <option value="What is your best friend's name?">
                    What is your best friend's name?
                  </option>

                  <option value="What is your pet's name?">
                    What is your pet's name?
                  </option>

                  <option value="What was your favorite food as a child?">
                    What was your favorite food as a child?
                  </option>

                  <option value="What is your favorite sport?">
                    What is your favorite sport?
                  </option>
              </select>
                {/* <CustomInput placeholder='Security Question*' name="securityQuestion" style = {securityStyle} onChange={updateUserdata}/> */}
              <CustomInput placeholder='Your Answer' name="answer" style = {answerStyle} onChange={updateUserdata} required/>
              <CustomInput placeholder='Password*' name="password" type ='password' style = {passStyle} onChange={updateUserdata}/>
              <CustomInput placeholder='Confirm Password*' name="confirmPassword" type ='password' style = {conpasStyle} onChange={updateUserdata}/>
            {/* <Link to='/login' className='links'> */}
              <CustomButton title = 'SIGN UP' style = {{width: '100%', margin: '8px 0% auto'}} />
            {/* </Link> */}
            </div>
            <div className='bottoms'>
              <h5>By signing up, you agree to our <Link to='/terms' className='links'><span>Terms of Use</span></Link> and <Link to='/policy' className='links'><span>Privacy Policy</span></Link></h5>
              <p>Already have an account? <span> <Link to='/login' className='links'> Login </Link> </span></p>
            </div>

          </form>
        <div className="col-2">
          <img src={img} alt = 'learning' className='signimg'/>
          <div className="abs">
            <div className="flexs">
                <Link to='/' className='links'>
                  <img src={logo} alt="Logo" className='img'/>
                </Link>
                <p>Eduspot</p>
            </div>
            <h1>Welcome to our E-learning center</h1>
          </div>
        </div>
      </div>
  )
}

export default SignupPage