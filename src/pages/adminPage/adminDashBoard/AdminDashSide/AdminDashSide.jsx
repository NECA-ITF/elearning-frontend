import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './AdminDashSide.css'
import { Link } from 'react-router-dom'

function AdminDashSide() {
  return (
    <div className="adminDashSide">
        <div className="dashSideBtn">
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
        <Link to='/admin-outline' className='links'>
            <CustomButton  
                title="All Outline" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
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
        <Link to='/admin-profile' className='links'>
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
        </div>
    </div>
  )
}

export default AdminDashSide