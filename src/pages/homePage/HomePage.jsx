import React from 'react'
import './HomePage.css'
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
// import itflogo from '../../assets/itf_log.png';
import image from '../../assets/image1.jpg';
import NavBar from './NavBar';


function HomePage() {
  return (
    <div className='homepg'>
        <NavBar/>
      <div className='custominput'>
        <CustomInput placeholder="Find a course" className="input"/>
      </div>
      <div className='display-item'>
        <div className='text'>
              <p>We offer hands on learning that gets you skills for your present and future needs. Get started with us and start a course. </p>
              <div className='home-button'>
                <CustomButton title="SIGN UP" style={{width:'120px', height:'50px', padding:'1rem',color:'#151D3B', backgroundColor:'white'}}/>
                <CustomButton title="LOGIN" style={{width:'120px', height:'50px', padding:'1rem', color:'#151D3B', backgroundColor:'white'}}/>
              </div>
        </div>
        <div className='pix'>
            <img src={image} alt="image" width={400} />
        </div>
      </div>
    </div>
  )
}

export default HomePage