import React from 'react'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import CustomButton from '../../components/customButton/CustomButton'
import './AdminAllOutline.css'
import OutlineVideo from './OutlineVideo/OutlineVideo'
import Outline from './Outline/Outline'
function AdminAllOutline() {
  return (
    <div class="adminDashContainer">
        <AdminDashSide />
        <div class="adminDashContent">
            <div class="adminDashContentContainer">
                <div class="adminDashContentHeader">
                    <select name='Courses'>
                        <option value="Courses" disabled selected>Courses</option>
                        <option value="pumpernickel">Introduction to HTML</option>
                        <option value="reeses">Introduction to CSS</option>
                        <option value="reeses">React I</option>
                        <option value="dave">Introduction to Python</option>
                        <option value="dave">Node JS</option>
                    </select>
                    <CustomButton title='+Create' 
                        style={{
                            marginRight: '20px',
                            background: '#151D3B',
                            color: 'white',
                            padding: '10px 20px',
                            width: '100px'
                        }} 
                    />
                </div>
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