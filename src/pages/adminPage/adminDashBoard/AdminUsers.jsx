import React from 'react'
import './AdminUsers.css'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import UserCard from './UserCard/UserCard'
import UserData from './UserData/UserData'

function AdminUsers() {
  return (
    <div class="adminDashContainer">
        <AdminDashSide />
        <div class="adminDashContent">
            <div class="adminDashContentContainer">
                <AdminDashContentHeader />
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