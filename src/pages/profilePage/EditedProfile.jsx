import React,{useState} from 'react'
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton'
import './EditedProfile.css'
import SideBar from './SideBar';
import { useEffect } from 'react';

function EditedProfile() {
   
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
    }


    function handleSubmit(e){
        //to prevent refreshing if page after submitting
        e.preventDefault()
        console.log(userEditedProfile)

        const{fullName,phoneNumber} = userEditedProfile

        if(fullName.trim() === '' || phoneNumber.trim() === ''){
            return  console.log('you cannot use empty space')
        }
        setLocalStorageData(initialLC => ({
            ...initialLC,
            fullName:userEditedProfile.fullName,
            phoneNumber:userEditedProfile.phoneNumber
        }))

        localStorage.setItem('userData',JSON.stringify(localStorageData))

        const id = localStorageData._id

        fetch(`http://192.168.1.2:5000/auth/user/updateprofile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userEditedProfile),
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.success){
                    console.log('done')
                }
            }
        )
        
    }


  return (
    <div className="mainone">
        <SideBar />
        <div className="main1">
            <form onSubmit={handleSubmit} >
            <div className='Back1'>
            
                {/* <div className='profile-img'>
                <User size={85} weight="thin" /> 
                </div> */}

                <div className="border2" >
                    <p>Fullname</p>
                    <CustomInput placeholder='Maryam Suleiman' name="fullName" style={{width:'100%',height:'1rem',borderRadius:'5rem',border:' 1px solid rgba(255, 135, 135, 0.637)',padding:'1.5rem'}} value={userEditedProfile.fullName} onChange = {updateEditedprofile}/>
                </div>

                <div className="border2">
                    <p>Phone number</p>
                    <CustomInput  placeholder='0908755780' name="phoneNumber"  style={{width:'100%',height:'1rem',borderRadius:'5rem',border:' 1px solid rgba(255, 135, 135, 0.637)',padding:'1.5rem'}}value ={userEditedProfile.phoneNumber}  onChange = {updateEditedprofile} />
                </div>
                <div className="border2">
                    <CustomButton title={'Confirm Changes'} type='submit' style={{width:'100%', height:'1rem',borderRadius:'5rem',padding:'1.5rem'}}/>
                </div> 
            </div>
            </form>
        </div>
    </div>
            
    )
}

export default EditedProfile