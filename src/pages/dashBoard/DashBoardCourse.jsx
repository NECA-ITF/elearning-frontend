import React from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import './DashBoardCourse.css'
// import RatingImage from '../../assets/images/star-grey.png'
import clock from '../../assets/dashboard/clock.svg'
import bcase from '../../assets/dashboard/briefcase.svg'
import Rating from 'react-rating'

function DashBoardCourse({name, title, image, icons}) {
  
  return (
    <div className='coursecard'>
      <div className='course-inn-div'>
        <img src={image} alt="thumb" className='thumb'/>
        <div className='bottom-sec'>
          <div className='stardiv'>
            <img src={icons} alt='ico' className='profileicons'></img>
            <div className='star-text'>
              <Rating placeholderRating={3}
                emptySymbol={<img src='http://dreyescat.github.io/react-rating/assets/images/star-red.png' className="icon" />}
                placeholderSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon" />}
                fullSymbol={<img src='http://dreyescat.github.io/react-rating/assets/images/star-yellow.png' className="icon" />}
              />
              <h5> 4.9</h5>
            </div>
            
          </div>
          <div className='svg-div'>
            <div className='clock-div'>
              <img src={clock} alt='clock'/>
              <p>10 hours</p>
            </div>
            <div className='case-div'>
              <img src={bcase} alt='case'/>
              <p>lecture</p>
            </div>
          </div>
          <div className='course-title'>
            <p>{title}</p>
          </div>
          <CustomButton title="start course" style={{width: "100%", marginBottom: '1rem', padding:"10px 0px 12px"}}/>
        </div>
      </div>
    </div>
  )
}

export default DashBoardCourse
