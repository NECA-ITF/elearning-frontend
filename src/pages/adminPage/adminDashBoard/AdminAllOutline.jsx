import React from 'react'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import './AdminAllOutline.css'
import OutlineVideo from './OutlineVideo/OutlineVideo'
import Outline from './Outline/Outline'
function AdminAllOutline() {
    const data =[
        {title: ""},
      ]
      const mode = 'outline'
    
  return (
    <div className="adminDashContainer">
        <AdminDashSide />
        <div className="adminDashContent">
            <div className="adminDashContentContainer">
                <AdminDashContentHeader mData={data} mMode={mode}  />
                <div className="adminDashContentBody">
                    <div className="adminDashCourseOutlines">
                        <Outline title='Introduction to HTML'/>
                        <Outline title='Introduction to CSS'/>
                        <Outline title='React I'/>
                        <Outline title='Introduction to Python'/>
                        <Outline title='Node JS'/>
                    </div>
                    <div className="adminDashCourseOutlinesVideos">
                        <OutlineVideo title = 'HTML COURSE 1' />
                        <OutlineVideo title = 'HTML COURSE 2' />
                        <OutlineVideo title = 'HTML COURSE 3' />
                        <OutlineVideo title = 'HTML COURSE 4' />
                        <OutlineVideo title = 'HTML COURSE 5' />
                        <OutlineVideo title = 'HTML COURSE 6' />
                        <OutlineVideo title = 'HTML COURSE 7' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAllOutline