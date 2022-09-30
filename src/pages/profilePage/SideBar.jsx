import './SideBar.css'
import logo from '../../assets/itf_log.png'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Password,Gear,User,SignOut,Lock} from "phosphor-react"
function SideBar() {
    const[userData,setUserData] = useState(null)

    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem('userData')))
    },[])

    function logoutUser() {
        localStorage.clear()
        toast.success(`Logged Out  Sucessful`, {
            position: toast.POSITION.TOP_RIGHT
        })
        
    }
    
   
  return (
    <div className="Sidebar-con ">
        <Link to='/' className='links'>
         <div className='sidebar-img'>
                 <img src={logo} alt="Logo" className='img'/>
        </div>
        </Link>
        {
            userData ? 
            userData.isAdmin ?
            (<Link to='/admin-dash' className='links'> 
                 <div  className='sidebar-icon'>
                    <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                    <p>DashBoard</p>
                </div>
            </Link>):  
            (<Link to='/dash-board' className='links'> 
                 <div  className='sidebar-icon'>
                    <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                    <p>DashBoard</p>
                </div>
            </Link>) : 
            (<Link to='/login' className='links'>
                <div  className='sidebar-icon'>
                    <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                    <p>DashBoard</p>
                </div>
            </Link>)
            }
        {/* <Link to='/dash-board' className='links'>        
         <div  className='sidebar-icon'>
                <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>DashBoard</p>
          </div>
        </Link> */}
          
        <Link to='/profile-page' className='links'>        
            <div  className='sidebar-icon'>
                <User size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Profile</p>
            </div>
        </Link>

        <Link to="/edited-profile" className='links' >
            <div  className='sidebar-icon' >
                <Gear size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Edit Profile</p>
            </div>
         </Link>

         <Link to='/change-password' className='links'>
             <div  className='sidebar-icon'>
                <Password size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
                <p>Change password</p>
            </div>
        </Link>
        
             <div  className='sidebar-icon'>
            <Lock size={18} color='white' style={{ marginRight: '1rem'}} weight="thin" />
            <p>Privacy</p>
             </div>
        
        <Link to='/login'className='links' onClick={logoutUser}> 
                <div  className='sidebar-icon'>
                <SignOut size={18} color='white' style={{ marginRight: '1rem'}} weight="thin"  />
                <p>Log Out</p>
                  </div>
        </Link>
    </div> 

  )
}

export default SideBar
