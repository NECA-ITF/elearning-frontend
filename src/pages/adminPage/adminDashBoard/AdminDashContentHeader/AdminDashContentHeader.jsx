import React from 'react'
import './AdminDashContentHeader.css'
import CustomModal from '../../../../components/customModal/CustomModal'

function adminDashContentHeader({mData, mMode, API_URL}) {
  return (
    <div className="adminDashContentHeader">
        <select defaultValue={'Courses'}>
            <option value="Courses" disabled>Courses</option>
            <option value="pumpernickel">Introduction to HTML</option>
            <option value="reeses">Introduction to CSS</option>
            <option value="reeses">React I</option>
            <option value="dave">Introduction to Python</option>
            <option value="dave">Node JS</option>
        </select>
        <CustomModal data = {mData} mode ={mMode} API_URL={API_URL} />
    </div>
  )
}

export default adminDashContentHeader