import React from 'react'
import './HomePage.css'
import CustomButton from '../../components/customButton/CustomButton';
import image from '../../assets/newlogo.png';
import NavBar from './NavBar';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


function HomePage() {

  const[userData,setUserData] = useState(null)
  useEffect(()=>{
      setUserData(JSON.parse(localStorage.getItem('userData')))
  },[])

  return (
    <div className='homepagebody'>
      <NavBar />
      <div className='homepg'>
        <div className='display-item'>
          <div className='home-text'>
            <h1>Eduspot</h1>
            <p>Welcome to Eduspot e-learning platform! Get started with us and start a course.</p>
            <div className='home-button'>

              {
                !userData ?
                (
                  <Link to='/signup'>
                    <CustomButton title="GET STARTED" style={{width:'200px', height:'50px', padding:'1rem',color:'white', backgroundColor:'#151D3B', fontSize:'.7rem'}}/>
                  </Link>
                ):
                (
                  <Link to='/dash-board'>
                    <CustomButton title="GET STARTED" style={{width:'200px', height:'50px', padding:'1rem',color:'white', backgroundColor:'#151D3B', fontSize:'.7rem'}}/>
                  </Link>
                )
              }
              
            </div>
          </div>
          <div className='mockpix'>
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