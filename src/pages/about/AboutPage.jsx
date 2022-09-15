import React from 'react'
import NavBar from '../homePage/NavBar'
import './AboutPage.css'
import AboutList from './AboutList'
import users from './users.json'



function AboutPage() {
  return (
    <div className='ab'>

        <div className='abouthead'>
        <h2>About us</h2>
        </div>
        <NavBar/>
        <AboutList userss={users}/> 
        
    </div>
    
    
    
  )
}

export default AboutPage;