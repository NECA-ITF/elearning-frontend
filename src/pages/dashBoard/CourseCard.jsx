import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from '../../components/customButton/CustomButton'
import './CourseCard.css'
// import RatingImage from '../../assets/images/star-grey.png'
import clock from '../../assets/dashboard/clock.svg'
import bcase from '../../assets/dashboard/briefcase.svg'
import Rating from 'react-rating'
import pinkstar from '../../assets/dashboard/rating.svg'
import over from '../../assets/dashboard/star.svg'
import { Link } from 'react-router-dom';



function DashBoardCourse({name, title, image, isAdmin, API_URL, course, setCurrentCourse, time, ratings, getCourses, ...otherProps}) {
  function deleteCourse(course){
    if(!window.confirm("Are you sure you want to delete this outline?")) return;
    fetch(`${API_URL}/api/course`,{
        headers: {
            'Content-Type': 'application/json'
        },
        method: "DELETE",
        body: JSON.stringify({ courseId: course._id })
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
          toast.success(`${res.message}`, {
            position: toast.POSITION.TOP_RIGHT
          })
          getCourses();
        }else{
          toast.success(`${res.message}`, {
            position: toast.POSITION.TOP_RIGHT
          })
        }
    })
}

  return (
    <div className='coursecard'{...otherProps}>
      <div className='course-inn-div'>
        <img src={`${API_URL}/${image}`} alt="thumb" className='thumb'/>
        <div className='bottom-sec'>
          <div className='stardiv'>
            <div className='initials'>{name.split(' ')[0].split('')[0]} {name.split(' ')[1].split('')[0]}</div>
            {/* <img src={icons} alt='ico' className='profileicons'></img> */}
            <div className='star-text'>
              <Rating placeholderRating={3.5}
                emptySymbol={<img src={pinkstar} className="icon" alt='#'style={{width:'20px'}} />}
                placeholderSymbol={<img src={pinkstar} className="icon" alt='#' style={{width:'20px' }}/>}
                fullSymbol={<img src={over} className="icon" alt='#'style={{width:'20px'}}/>}
              />
              <div className='rate'>
                <h5>{ratings}</h5>
                <h6>180</h6>
              </div>
            </div>
            
          </div>
          <div className='svg-div'>
            <div className='clock-div'>
              <img src={clock} alt='clock'/>
              <p>{`${time} hrs`}</p>
            </div>
            <div className='case-div'>
              <img src={bcase} alt='case'/>
              <p style={{fontFamily:'BioRhyme, serif'}}>{name}</p>
            </div>
          </div>
          <div className='course-title'>
            <p>{title}</p>
          </div>

            <Link to={isAdmin ? "/admin-outline" : "/course-outline"} className='links'>
              <CustomButton title={isAdmin ? "edit course" : "start course"} style={{width: "100%", fontFamily:'BioRhyme, serif', marginBottom: '2rem', padding:"10px 0px 12px", boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}} 
              onClick={() => { 
                localStorage.setItem('currentCourse', JSON.stringify(course)) 
                }} 
              />
            </Link>
            {isAdmin && 
              <CustomButton title="delete course" style={{width: "100%", fontFamily:'BioRhyme, serif', marginBottom: '2rem', padding:"10px 0px 12px", boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}} onClick={() => {deleteCourse(course)}} />
            }
         
          
        </div>
      </div>
    </div>
  )
}

export default DashBoardCourse
