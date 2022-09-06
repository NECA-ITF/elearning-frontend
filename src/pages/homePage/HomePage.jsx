import React from 'react'
import './HomePage.css'
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
// import itflogo from '../../assets/itf_log.png';
import image from '../../assets/image1.jpg';



function HomePage() {
  return (
    <div className='homepg'>
      <div className='custominput'>
        {/* <div className='indiv'>
          <CustomInput placeholder="Find a course" className="input" style={{width:'300px'}}/>
        <CustomButton title="click" className="bet" style={{width:'100px', height:'48px', padding:'5px 0px', margin:'10px 0px'}}/>
        </div> */}
        
      </div>
      <div className='display-item'>
        <div className='text'>
              {/* <h2>We offer hands on learning that gets you skills for your present and future needs. Get started with us and start a course.</h2> */}
              {/* <div className='home-button'>
                <CustomButton title="SIGN UP" style={{width:'130px', height:'50px', padding:'1rem',color:'#151D3B', backgroundColor:'white'}}/>
                <CustomButton title="LOGIN" style={{width:'120px', height:'50px', padding:'1rem', color:'#151D3B', backgroundColor:'white'}}/>
              </div> */}
        </div>
        {/* <div className='pix'>
            <img src={image} alt="logo" width={400} />
        </div> */}
      </div>
    </div>
  )
}

export default HomePage