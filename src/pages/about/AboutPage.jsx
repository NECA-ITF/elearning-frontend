import React from 'react'
import aboutpix from './aboutAssets/aboutpix.JPG'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className='aboutpage'>
        <div className='rash'>
            <img src={aboutpix} alt="logo" width={400}/>
        </div>
        <div className='rashdetail'>
            <h3>Name: Abdusalman Edris</h3>
            <h3>GitHub: momohrasheed06</h3>
            <h3>Core Skill: CSS and JavaScript</h3>
        </div>
    </div>
  )
}

export default AboutPage