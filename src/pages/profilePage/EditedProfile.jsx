import React,{useState} from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import logo from '../../assets/itf_log.png';
import './EditedProfile.css'
import SideBar from './SideBar';
import { Link,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function EditedProfile() {
    const navigate = useNavigate()
    const[userEditedProfile, setUserEditedprofile] = useState({
        fullName:'',
        phoneNumber:''
    })
    const [localStorageData,setLocalStorageData] = useState({})

    useEffect(()=>{
        //COLLECTING THE DATA FROM LOCAL STORAGE AND CONVERTING TO AN OBJECT
        const stData = JSON.parse(localStorage.getItem('userData'))
        //SETTING THE DATE COLLECTED INTO THIS STATE
        setLocalStorageData(stData)
        const {fullName,phoneNumber,email} = stData
        setUserEditedprofile(
            (initialprofile) =>(
                {
                    ...initialprofile,
                    fullName:fullName,
                    email:email,
                    phoneNumber:phoneNumber
                }
            )
        )
    },[])
    
    
    // const navigate = useNavigate()
    function updateEditedprofile(e){
        const {name, value} = e.target
        setUserEditedprofile(initialEdit => ({
            ...initialEdit, [name]:value
        }))
        console.log(userEditedProfile)
        // console.log(userEditedProfile)
        // console.log(localStorageData._id)
    }


    function handleSubmit(e){
        //to prevent refreshing if page after submitting
        e.preventDefault()
        const{fullName,phoneNumber} = userEditedProfile

        if(fullName.trim() === '' || phoneNumber.trim() === ''){
            return  console.log('you cannot use empty space')
        }

            fetch(`http://192.168.1.2:5000/auth/user/update-profile/${localStorageData._id}`, { 
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(userEditedProfile)
            })
            .then((res) => res.json())
            .then((data) => {
              if (data.success){
                setLocalStorageData((initialStorage) =>({
                    ...initialStorage,
                    fullName:userEditedProfile.fullName,
                    phoneNumber:userEditedProfile.phoneNumber
                }))
                console.log(localStorage)
                localStorage.setItem('userData',JSON.stringify(localStorageData))
                //navigate("/profile-page")
              } 

            })
        
    }


  return (
    <div className="mainone">
        <SideBar />
        <div className="main1">
            <form onSubmit={handleSubmit} >
            <div className='Back1'>
            
                <div className='profile-img'>
                    <img src={logo} alt="Logo" className='img'/>
                </div>

                <div className="border2" >
                    <p>Fullname</p>
                    <CustomInput placeholder='Maryam Suleiman' name="fullName" style={{width:'100%',height:'1rem'}} value={userEditedProfile.fullName} onChange = {updateEditedprofile}/>
                </div>

                <div className="border2">
                    <p>Phone number</p>
                    <CustomInput  placeholder='0908755780' name="phoneNumber"  style={{width:'100%',height:'1rem'}}value ={userEditedProfile.phoneNumber}  onChange = {updateEditedprofile} />
                </div>
                <div className="border2">
                    <CustomButton title={'Confirm Changes'} type='submit' style={{width:'100%', height:'1rem'}}/>
                </div> 
            </div>
            </form>
        </div>
    </div>
            
    )
}

export default EditedProfile