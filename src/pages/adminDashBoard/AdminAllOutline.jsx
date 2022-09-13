import React,{useState} from 'react'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import courses from '../dashBoard/data.json'
import './AdminAllOutline.css'
import OutlineVideo from './OutlineVideo/OutlineVideo'
import Outline from './Outline/Outline'
function AdminAllOutline() {
    const [searchInput, setSearchInput]= useState("")
    const [searchCourse, setSearchCourse]= useState(courses)
    const input= (event)=>{
      
      // const inp =  
      setSearchInput(event.target.value)
  
    }
    const searchClicked = (event) => {
      event.preventDefault();
      const filteredCourses = courses.filter(course=>(
        course.title.toLowerCase().includes(searchInput.toLowerCase())
      ))
      setSearchCourse([...filteredCourses])
    }
  return (
    <div class="adminDashContainer">
        <AdminDashSide />
        <div class="adminDashContent">
            <div class="adminDashContentContainer">
                <AdminDashContentHeader />
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