import React,{useState} from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import logo from '../../assets/itf_log.png';
import './EditedProfile.css'
import SideBar from './SideBar';
import { toast } from 'react-toastify';

function ChangePassword(){ 
    const style = {width:'100%',height:'1rem', borderRadius:'5rem',border:' 2px solid black',padding:'1.5rem'}

    const [passStyle, setPassStyles] = useState({
        ...style
       })
    const [conPassStyle, setConPassStyles] = useState({
        ...style
    })

    const redBorder = {
        width:'100%',
        height:'1rem', 
        borderRadius:'5rem',
        padding:'1.5rem',
        border: '2px solid red'
    }
    const greenBorder = {
        width:'100%',
        height:'1rem', 
        borderRadius:'5rem',
        padding:'1.5rem',
        border: '2px solid green'
    }
   
    const[userPasswords,setUserPasswords] = useState({
        oldPassword:'',
        password:'',
        confirmPassword:''
    })

   
    const {password,confirmPassword} = userPasswords 
    
    const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

    function handleChangePassword(e){
        const {name,value} = e.target
        setUserPasswords(intialState => ({
            ...intialState,
            [name]:value
        }))

    }
    //let check = Object.is(password,confirmPassword)

    function handleNewpassword(e){
        const {name,value} = e.target
        setUserPasswords(intialState => ({
            ...intialState,
            [name]:value
        }))
        
        if(strongPassword.test(password)){
            setPassStyles({...greenBorder})
        }
        else{
            setPassStyles({...redBorder})
        }
    }
    
    function handleOnSubmit(e){
        e.preventDefault();
        if(password === confirmPassword){
            setConPassStyles({...greenBorder})
        }else{
            setConPassStyles({...redBorder})
        }

        if (password !== confirmPassword){
            return toast.warn("passwords don't match", {
              position: toast.POSITION.TOP_RIGHT
            })
        }

        toast.success("passwords match", {
            position: toast.POSITION.TOP_RIGHT
          })

        //proceeed to fetch
    }
  return (
    <div className="mainone">
    <SideBar /> 
    <div className="main1">
        <form onSubmit={handleOnSubmit}>
          <div className='Back1'>

             <div className='profile-img'>
                 <img src={logo} alt="Logo" className='img'/>
             </div>
             <div className="border2" >
                <p>Enter Old Password</p>
                <CustomInput type="password" name= 'oldPassword'   placeholder='XXXXXXXX' style={{...style}}
                onChange={handleChangePassword}/>
            </div>

            <div className="border2" >
                <p>Create New Password</p>
                <CustomInput type="password" name = 'password'   placeholder='XXXXXXXX' style={{...passStyle}}
                onChange={handleNewpassword}/>
            </div>

            <div className="border2">
                <p>Re-Enter Password</p>
                <CustomInput type="password" name= 'confirmPassword'  placeholder='XXXXXXXX'  style={conPassStyle}  onChange={handleChangePassword}/>
            </div>
               
            <div className="border2">
                <CustomButton title={'Confirm Password'} type='submit' style={{width:'100%', height:'1rem',borderRadius:'5rem',padding:'1.5rem'}}/>
            </div> 
            </div>
        </form>
    </div>

    </div>
  
    )
}

export default ChangePassword