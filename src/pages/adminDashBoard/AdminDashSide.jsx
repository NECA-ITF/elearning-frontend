import React from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import './AdminDashSide.css'
function AdminDashSide() {
  return (
    <div class="adminDashSide">
        <div class="dashSideBtn">
            <CustomButton  
                title="All Courses" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
            <CustomButton  
                title="All Outline" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
            <CustomButton  
                title="All Users" 
                style={{ 
                    marginBottom: "10px",
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