import React from 'react'
import './HomePage.css'
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
// import itflogo from '../../assets/itf_log.png';
import image from '../../assets/newlogo.png';



function HomePage() {
  return (
    <div className='homepg'>
      <div className='custominput'>
        <div className='indiv'>
          {/* <CustomInput placeholder="Find a course" className="input" style={{width:'300px'}}/>
        <CustomButton title="click" className="bet" style={{width:'100px', height:'48px', padding:'5px 0px', margin:'10px 0px'}}/> */}
        </div>
        
      </div>
      <div className='display-item'>
        <div className='text'>
          <h1>E-Learning Service!</h1>
              <p>We offer hands on learning that gets you skills for your present and future needs. Get started with us and start a course.</p>
              <div className='home-button'>
                <CustomButton title="GET STARTED" style={{width:'130px', height:'50px', padding:'1rem',color:'#151D3B', backgroundColor:'white'}}/>
                </div>
        </div>
        <div className='pix'>
            <img src={image} alt="logo" width={400} />
        </div>
      </div>
      <div className='shapedividers_com-6246'>
      
      </div>
    </div>
  )
}

export default HomePage