import React from 'react'
import './AdminDashContentHeader.css'
import CustomModal from '../../../components/customModal/CustomModal'
function adminDashContentHeader() {
  return (
    <div class="adminDashContentHeader">
        <select name='Courses'>
            <option value="Courses" disabled selected>Courses</option>
            <option value="pumpernickel">Introduction to HTML</option>
            <option value="reeses">Introduction to CSS</option>
            <option value="reeses">React I</option>
            <option value="dave">Introduction to Python</option>
            <option value="dave">Node JS</option>
        </select>
        {/* <CustomButton title='+Create' 
            style={{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: '10px 20px',
                width: '100px'
            }} 
        /> */}
        <CustomModal />
    </div>
  )
}

export default adminDashContentHeader