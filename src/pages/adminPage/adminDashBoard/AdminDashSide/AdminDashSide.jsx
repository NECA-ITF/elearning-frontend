import React from 'react'
import CustomButton from '../../../../components/customButton/CustomButton'
import './AdminDashSide.css'
import itflogo from '../../../../assets/itf_log.png';
import { Link } from 'react-router-dom'

function AdminDashSide() {
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
        </div>
    </div>
  )
}

export default AdminDashSide