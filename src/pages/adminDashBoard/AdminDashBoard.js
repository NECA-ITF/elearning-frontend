import React,{useState} from 'react'
import './AdminDashBoard.css'
import CustomButton from '../../components/customButton/CustomButton'
import DashBoardCourse from '../dashBoard/DashBoardCourse'


function AdminDashBoard() {
  return (
    <div id='adminDash'>
            <div id='adminDash-left'>
                <div id='admDashmarginTop'> 
                    {/* <span className='sectiontabs'>All Courses</span>
                    <span className='sectiontabs'>All Outline</span>
                    <span className='sectiontabs'>All Users</span> */}
                     <CustomButton title="All Courses" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                     <CustomButton title="All Outline" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                     <CustomButton title="All Users" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                </div>
                
            </div>
            <div id='adminDash-right'>
            </>
             {/* <AdminDashBoardOutlines/> */}
             </div>
    </div>
  )
}

export default AdminDashBoard