import React, { useState, useEffect } from 'react';
import './DashBoard.css'
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput'
import DashCourseList from './DashCourseList';
import DashNav from '../../components/dashBoard/DashNav';

function DashBoard({ API_URL, setCurrentCourse }) {
  const [searchInput, setSearchInput]= useState("")
  const [courses, setCourses]= useState([])
  const [searchCourse, setSearchCourse]= useState([])
  // const [userData, setUserData] = useState(null);
  // const navigate = useNavigate()

  const input= (event)=>{
    
    // const inp =  
    setSearchInput(event.target.value)
    
  }
  const searchClicked = (event) => {
    event.preventDefault();
    const filteredCourses = courses.filter(course=>(
      course.title.toLowerCase().includes(searchInput.toLowerCase())
      ))
      // console.log(filteredCourses)
    setSearchCourse([...filteredCourses])
  }

  function getCourses(){
    fetch(`${API_URL}/api/courses`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setCourses(data.courses))
    .catch((err) => console.log(err))
  }
  useEffect(() => {
    getCourses();
    // eslint-disable-next-line 
  }, [])

  

  return (
    <div className='dashcontainer'>
      <DashNav/>
      <div className='dashcustominput'>
        <form className='dashindiv' onSubmit={searchClicked}>
          <CustomInput placeholder="Find a course" className="dashinput" type= 'search' style={{width:'400px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}} onChange={input}/>
          <CustomButton title="search" className="dashbet" style={{width:'100px', height:'41px', padding:'5px 0px', margin:'10px 0px', fontFamily:'BioRhyme, serif'}} type='submit' />
        </form>
        <form className='dashindiv-mob' onSubmit={searchClicked}>
          <CustomInput placeholder="Find a course" className="dashinput" type= 'search' style={{width:'200px', padding: '10px 15px 6px', fontFamily:'BioRhyme, serif'}} onChange={input}/>
          <CustomButton title="search" className="dashbet" style={{width:'100px', height:'41px', padding:'5px 0px', margin:'10px 0px', fontFamily:'BioRhyme, serif'}} type='submit' />
        </form>
      </div>
      <div className='titlediv'>
        <h1>All Courses</h1>
      </div>
      <DashCourseList courses= {searchCourse.length ? searchCourse :  courses} API_URL={API_URL} setCurrentCourse={setCurrentCourse} />
    </div>
  )
}

export default DashBoard

