import React,{useState,useEffect} from 'react'
import './AdminSidebar.css'
import { Link } from 'react-router-dom';
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"

function AdminSideBar() {
    const [userData, setUserData] = useState(null);
    function logoutUser(params) {
        localStorage.setItem('userData', null);
        setUserData(null)
    }
    
    
    useEffect(() => {
        const user = localStorage.getItem('userData');
        setUserData(JSON.parse(user));
    }, [])
    //to avoid command never used prompt 
    console.log(userData ? 'user': 'no user')
  return (
    <div className="Admin-Con">
        <Link to='/profile-page' className='links'>        
            <div  className='veiw2'>
                <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Admin Profile</p>
            </div>
        </Link>
        <Link to="/edited-profile" className='links' >
            <div  className='veiw2' >
                <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Edit Admin Profile</p>
            </div>
        </Link>
        <Link to='/change-password' className='links'>
            <div  className='veiw2'>
                <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Change password</p>
            </div>
        </Link>
        
        <div  className='veiw2'>
            <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Privacy</p>
        </div>
        
        <Link to='/login'className='links' onClick={logoutUser}> 
            <div  className='veiw2'>
                <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin"  />
                <p>Log Out</p>
            </div>
        </Link>
    </div> 

  )
}

export default AdminSideBar
