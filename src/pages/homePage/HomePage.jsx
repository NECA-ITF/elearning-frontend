import React from 'react'
import './HomePage.css'
import CustomButton from '../../components/customButton/CustomButton';
import image from '../../assets/newlogo.png';



function HomePage() {
  return (
    <div className='homepg'>
      <div className='custominput'>
        <div className='indiv'>
        </div>
        
      </div>
      <div className='display-item'>
        <div className='text'>
          <h1>Eduspot</h1>
              <p>Welcome to Eduspot e-learning platform! Get started with us and start a course.</p>
              <div className='home-button'>
                <CustomButton title="GET STARTED" style={{width:'200px', height:'50px', padding:'1rem',color:'white', backgroundColor:'#151D3B', fontSize:'.7rem'}}/>
                </div>
        </div>
        <div className='pix'>
            <img src={image} alt="logo" width={600} />
        </div>
      </div>
      <div className='shapedividers_com-6246'>
      
      </div>
    </div>
  )
}

export default HomePage