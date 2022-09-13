import React,{useState} from 'react'
import './AdminDashBoard.css'
import CustomButton from '../../components/customButton/CustomButton'
//import courses from '../dashBoard/data.json'
import DashCourseList from '../dashBoard/DashCourseList'
import { Link } from 'react-router-dom'
// import Movie from '../../assets/media.io_3d1cbb22d5874411addc3e814ed6e5de.mp4'
// import CustomModal from '../../components/customModal/CustomModal'



function AdminDashBoard() {
//     const [searchInput, setSearchInput]= useState("")
//   const [searchCourse, setSearchCourse]= useState(courses)
//   const input= (event)=>{
//     setSearchInput(event.target.value)

//   }
//   const searchClicked = (event) => {
//     event.preventDefault();
//     const filteredCourses = courses.filter(course=>(
//       course.title.toLowerCase().includes(searchInput.toLowerCase())
//     ))
//     setSearchCourse([...filteredCourses])
//   }
  return (
    //Overall admin dashboard
    <div id='adminDash'>
        {/* admin-dashboard left */}
        <div id='adminDash-left'>
                <div id='admDashmarginTop'> 
                    <CustomButton title="All Courses" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                        <Link to ='/admin-dashboard'> <CustomButton title="All Outline" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/></Link>
                        <Link to ='/admin-users'><CustomButton title="All Users" style={{width: '90%', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/></Link>
                </div> 
        </div>
            {/* admin-dashboard-right */}
              <div id='adminDash-right'>
               {/* <DashCourseList courses= {searchCourse} isAdmin= {true}/> */}
    {/* //overall dashboaard container */}
    <div id='adminDash'>
        {/* //left panel of the dashBoard */}
            <div id='adminDash-left'>
                <div id='admDashmarginTop'> 
                    <span className='sectiontabs'>All Courses</span>
                    <span className='sectiontabs'>All Outline</span>
                    <span className='sectiontabs'>All Users</span>
                </div>
            </div> 
            {/* //right hand side of the dash board */}
            <div id='adminDash-right'>
                {/* //dashboard header container */}
                <div id='dropDownContainer'>
                    <select name='Courses'>
                        <option value="Courses" disabled selected>Courses</option>
                        <option value={"pumpernickel"}>Introduction to HTML</option>
                        <option value="reeses">Introduction to CSS</option>
                        <option value="reeses">React I</option>
                        <option value="dave">Introduction to Python</option>
                        <option value="dave">Node JS</option>
                    </select>
                    <CustomButton  title="+ Create" style={{width: '120px', padding:'8px', textAlign : 'center' }}/>
                </div>
                
                 <div id='adminDash-right-container'>
                     <div id='adminDash-right-container-outlines'>
                        <div className='outlinedetails'>
                            <span>Introduction to HTML</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                        <div className='outlinedetails'>
                            <span>Introduction to CSS</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                        <div className='outlinedetails'>
                            <span>React I</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                        <div className='outlinedetails'>
                            <span>Introduction to Python</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                        <div className='outlinedetails'>
                            <span>Node JS</span> 
                            <div className='outineButtons'>
                                <CustomButton title="Add" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px", display:'block'}}/>
                                <CustomButton title=" Cancel" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/>
                                {/* <CustomButton title="Progress" style={{width: '70px', padding:'8px', textAlign : 'center' , fontSize:" 15px"}}/> */}
                            </div>
                        </div>
                     </div>
                     <div id='adminDash-right-container-videos'>
                        {/* <video src={Movie}  width="200px" height='150px'/> */}
                     </div>
                </div>
        
              </div>
              </div>
              </div>
    </div>
  )
}

export default AdminDashBoard
