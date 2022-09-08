import React from 'react'
import './HomePage.css'
import CustomButton from '../../components/customButton/CustomButton';
import image from '../../assets/newlogo.png';
import NavBar from './NavBar';
// import { Link } from 'react-router-dom';



function HomePage() {
  return (
    <div className='homepagebody'>
      <NavBar />
      <div className='homepg'>
      <div className='custominput'>
        <div className='indiv'>
          {/* <CustomInput placeholder="Find a course" className="input" style={{width:'300px'}}/>
        <CustomButton title="click" className="bet" style={{width:'100px', height:'48px', padding:'5px 0px', margin:'10px 0px'}}/> */}
        </div>
        
      </div>
      <div className='display-item'>
        <div className='text'>
          <h1>Eduspot</h1>
              <p>Welcome to Eduspot e-learning platform! Get started with us and start a course.</p>
              <div className='home-button'>
                {/* <Link to='/signupPage'> */}
                <CustomButton title="GET STARTED" style={{width:'200px', height:'50px', padding:'1rem',color:'white', backgroundColor:'#151D3B', fontSize:'.7rem'}}/>
                {/* </Link> */}
                </div>
        </div>
        <div className='pix'>
            <img src={image} alt="logo" width={600} />
        </div>
      </div>
      <div className='shapedividers_com-6246'>
      
      </div>
    </div>
    </div>
  )
}

export default HomePage