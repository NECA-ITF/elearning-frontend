import React, { useState, useEffect } from 'react'
import './CourseOutline.css'
import OutlineList from './OutlineList';
import { useNavigate } from 'react-router-dom';

function DashCourseOutline({ API_URL, setCurrentCourseOutline }) {
  const currentCourse = JSON.parse(localStorage.getItem('currentCourse'));
  const [courseOutline, setCourseOutline] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!(Object.keys(currentCourse).length)) return navigate('/dash-board', {replace: true});
    console.log(Object.keys(currentCourse).length);

    // console.log(currentCourse.requirements)
    fetch(`${API_URL}/api/outlines/${currentCourse._id}`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setCourseOutline(data.outline.outlines))
    .catch((err) => console.log(err))
    // eslint-disable-next-line 
  }, []);


  // return (
  //     <div className='accord-wrapper'>
  //       <div className='accord-container'>
  //         <h1>Course Outline</h1>
  //           <div className="accordion">
  //             {courseOutline.map((outline) => (
  //               <OutlineList key={outline._id} title={outline.title} lectures={outline.lectures} time={outline.time} outline={outline} setCurrentCourseOutline={setCurrentCourseOutline}/>
  //             ))}
  //           </div>
  //         <h2>{currentCourse?.title} Requirements</h2>
  //         <ul>
  //           {
  //             currentCourse.requirements ? currentCourse.requirements.map((requirement, index) => (
  //               <li key={index}>{requirement}</li>
  //             )) : ""
  //           }
  //         </ul>
  //         <h3>Description</h3>
  //         <h5 className='description-text'>{currentCourse?.description}</h5>
  //       </div>
  //     </div>
  // )
  return (
       <div className='course-wrapper'>
        <h1 className='course-h1'>COURSE OUTLINES</h1>
        <div className="course-outline">
            <div className="outline-videos">
                {courseOutline.map((outline) => (
                  <OutlineList key={outline._id} title={outline.title} lectures={outline.lectures} time={outline.time} outline={outline} setCurrentCourseOutline={setCurrentCourseOutline}/>
                ))}
            </div>
            <div className="outline-content">
                <h2>{currentCourse?.title} Requirements</h2>
                <ul>
                    {
                      currentCourse.requirements ? currentCourse.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      )) : ""
                    }
                </ul>
                <h3>Description</h3>
                <h5 className='description-text'>{currentCourse?.description}</h5>
            </div>
        </div>
    </div> 
   
)
}

export default DashCourseOutline
