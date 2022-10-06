import React, { useState, useEffect } from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './AdminDashSide.css'
import { toast } from 'react-toastify'
import itflogo from '../../../../assets/itf_log.png';
import { Link, useNavigate } from 'react-router-dom'

function AdminDashSide() {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate()

    function logoutUser(params) {
        localStorage.setItem('userData', null);
        toast.success(`Logged Out  Sucessful`, {
          position: toast.POSITION.TOP_RIGHT
        })
        setUserData(null)
        navigate('/')
      }
    
      useEffect(() => {
        const user = localStorage.getItem('userData');
        setUserData(JSON.parse(user));
      }, [])

  return (
    <div className="adminDashSide">
        <div className="dashSideBtn">
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link to='/' className='links'><img src={itflogo} alt="itflogo" style={{width:'60px', height:'60px', padding:'5px 5px'}}/></Link>
                <h4 style={{ color: "white" }}>Admin Dashboard</h4>
            </div>
        <Link to='/admin-dash' className='links'>
            <CustomButton  
                title="All Courses" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
        {/* <Link to='/admin-outline' className='links'>
            <CustomButton  
                title="All Outline" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link> */}
        <Link to='/admin-users' className='links'>
            <CustomButton  
                title="All Users" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
        <Link to='/admin-contacts' className='links'>
            <CustomButton  
                title="All Contacts" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
        <Link to='/profile-page' className='links'>
            <CustomButton  
                title="Admin Profile" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
        <CustomButton  
                title="Logout" 
                onClick={logoutUser}
                style={{ 
                    marginTop: "18rem",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </div>
    </div>
  )
}

export default AdminDashSide