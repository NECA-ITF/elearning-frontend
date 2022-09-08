import React from 'react'
import aboutpix from './aboutAssets/aboutpix.JPG'
import foto from '../../assets/image1.jpg'
import pix from '../../assets/mart.jpeg'
import './AboutPage.css'
import gith from './aboutAssets/gith.png'
import linkd from './aboutAssets/linkd.png'



function AboutPage() {
  return (
    <div className='ab'>
        <h2>About us</h2>
        <div className='about'>
            
            <div className='aboutpage'>
                <div className='rash'>
                    <img src={aboutpix} alt="logo" width={300}/>
                </div>
                <h3>Abdulrasheed Momo</h3>
                <div className='socials'>
                <img className='gitpix' src={gith} alt="g-icon" />
                    <img className='linkdpix' src={linkd} alt="l-icon"/>
                </div>
            </div>
            <div className='secondsec'>
                <div className='chris'>
                    <img src={foto} alt="pics" width={300} height={300} />
                </div>
                <h3>Chris Buckley</h3>
                <div className='socmed'>
                    <img className='gitpix' src={gith} alt="" />
                    <img className='linkdpix' src={linkd} alt="" />
                </div>
            </div>
            <div className='thirdsec'>
                <div className='mart'>
                    <img src={pix} alt="pic" width={300} height={300} backgroundColor="blue"/>
                </div>
                <h3>Martins Daubry</h3>
                <div className='socmed-icons'>
                    <img className='gitpix' src={gith} alt="" />
                    <img className='linkdpix' src={linkd} alt="" />
                </div>
            </div>
        </div>
    </div>
    
    
    
  )
}

export default AboutPage