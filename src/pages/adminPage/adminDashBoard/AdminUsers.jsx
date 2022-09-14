import React from 'react'
import './AdminUsers.css'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import UserCard from './UserCard/UserCard'
import UserData from './UserData/UserData'

function AdminUsers() {
    const data =[
        {fullName: ""},
        {email: ""},
        {phoneNumber: ""},
        {password: ""},
      ]
      const mode = 'user'
  return (
    <div className="adminDashContainer">
        <AdminDashSide />
        <div className="adminDashContent">
            <div className="adminDashContentContainer">
                <AdminDashContentHeader mData={data} mMode={mode}/>
                <div className="adminDashContentBody">
                    <div className="adminDashCourseOutlines">
                        <UserCard title='HAMIDAT'/>
                        <UserCard title='ABDULRASHEED'/>
                        <UserCard title='DANIEL'/>
                        <UserCard title='ABDULWASIU'/>
                        <UserCard title='MARYAM'/>
                    </div>
                    <div className="adminDashCourseOutlinesVideos">
                        <UserData 
                            fullName = 'HAMIDAT' 
                            email  = 'hamidat@gmail.com'
                            phoneNumber = '08098989298432' 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
            
  )
}

export default AdminUsers