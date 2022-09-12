import React,{useState} from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import logo from '../../assets/itf_log.png';
import './EditedProfile.css'
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

function EditedProfile() {
    const[userEditedProfile, setUserEditedprofile] = useState({
        fullName:'',
        phoneNumber:'',
        twitter:null,
        linkedIn:null
    })
   // const navigate = useNavigate()
    function updateEditedprofile(e){
        const {name, value} = e.target
        setUserEditedprofile(initialEdit => ({
            ...initialEdit, [name]:value
        }))
        console.log(userEditedProfile)
    }

    function handleSubmit(e){
        //to prevent refreshing if page after submitting
        e.preventDefault()
        const{fullName,phoneNumber,twitter,linkedIn} = userEditedProfile

        if(fullName.trim() === '' || phoneNumber.trim() === ''){
            return  console.log('you cannot use empty space')
        }
        if(twitter.trim()===""){
            setUserEditedprofile((intialState) => ({
                ...intialState,
                twitter: null,
            }))
            }
        if(linkedIn.trim()===""){
            setUserEditedprofile((intialState) => ({
                ...intialState,
                linkedIn: null,
            }))
        }

        /// Run your Post fetch
        //     fetch('http://192.168.1.2:5000/auth/user/update-profile', {
        //       method: 'PUT',
        //       headers: {
        //           'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(userEditedProfile)
        //     })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       if (data.success) navigate("/profile-page")
        //     })
        
    }

        

    

  return (
    <div className="mainone">
        <SideBar />
        <div className="main1">
            <form action="" onSubmit={handleSubmit} >
            <div className='Back1'>

                <div className='profile-img'>
                    <img src={logo} alt="Logo" className='img'/>
                </div>

                <div className="border2" >
                    <p>Fullname</p>
                    <CustomInput placeholder='Maryam Suleiman' name="fullName" style={{width:'100%',height:'1rem'}} onChange = {updateEditedprofile}/>
                </div>

                <div className="border2">
                    <p>Phone number</p>
                    <CustomInput  placeholder='0908755780' name="phoneNumber"  style={{width:'100%',height:'1rem'}}  onChange = {updateEditedprofile} />
                </div>
                <div className="border2">
                    <p>Other Links</p>
                    <CustomInput  placeholder='Twitter' name="twitter" style={{width:'100%',height:'1rem'}} onChange = {updateEditedprofile}/>
                    <CustomInput   placeholder='LinkedIn' name="linkedIn"style={{width:'100%',height:'1rem'}} onChange = {updateEditedprofile}/>
            
        
                </div>
                <Link to='/profile-page' className='links'>        
                <div className="border2">
                    <CustomButton title={'Confirm Changes'} type='submit' style={{width:'100%', height:'1rem'}}/>
                </div> 
                </Link>
            </div>
            </form>
        </div>
    </div>
          
          
            
    )
}

export default EditedProfile