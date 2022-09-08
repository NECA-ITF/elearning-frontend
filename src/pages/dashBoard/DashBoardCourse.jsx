import React from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import './DashBoardCourse.css'
// import RatingImage from '../../assets/images/star-grey.png'
import clock from '../../assets/dashboard/clock.svg'
import bcase from '../../assets/dashboard/briefcase.svg'
import Rating from 'react-rating'
import bstar from '../../assets/dashboard/bstar.svg'
import { Link } from 'react-router-dom';



function DashBoardCourse({name, title, image, icons, isAdmin = false}) {
 
  return (
    <div className='coursecard'>
      <div className='course-inn-div'>
        <img src={image} alt="thumb" className='thumb'/>
        <div className='bottom-sec'>
          <div className='stardiv'>
            <img src={icons} alt='ico' className='profileicons'></img>
            <div className='star-text'>
              <Rating placeholderRating={3.5}
                emptySymbol={<img src={bstar} className="icon" alt='#'style={{width:'23px'}} />}
                placeholderSymbol={<img src={bstar} className="icon" alt='#' style={{width:'23px' }}/>}
                fullSymbol={<img src={bstar} className="icon" alt='#'style={{width:'23px'}}/>}
              />
              <h5> 4.9</h5>
              <h6>180</h6>
            </div>
            
          </div>
          <div className='svg-div'>
            <div className='clock-div'>
              <img src={clock} alt='clock'/>
              <p>10 hours</p>
            </div>
            <div className='case-div'>
              <img src={bcase} alt='case'/>
              <p>{name}</p>
            </div>
          </div>
          <div className='course-title'>
            <p>{title}</p>
          </div>
          {
            isAdmin ? <CustomButton title='edit course' style={{width: "100%", marginBottom: '2rem', padding:"10px 0px 12px", boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}}/>:
            <Link to='/myCourses' className='links'>
            <CustomButton title='start course' style={{width: "100%", marginBottom: '2rem', padding:"10px 0px 12px", boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}}/> 
            </Link>
          }
         
          
        </div>
      </div>
    </div>
  )
}

export default DashBoardCourse
