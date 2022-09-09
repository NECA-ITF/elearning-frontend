import React from 'react'
import aboutpix from './aboutAssets/aboutpix.JPG'
// import foto from '../../assets/image1.jpg'
import pix from '../../assets/mart.jpeg'
import fiki from '../../assets/fiki.jpeg'
import victor from '../../assets/victor.jpeg'
// import mj from '../../assets/mj.jpeg'
import gabbie from '../../assets/gabbie.jpeg'
import bigi from '../../assets/bigi.jpeg'
import eb from '../../assets/eb.jpeg'
import meda from '../../assets/meda.jpeg'
import wasiu from '../../assets/wasiu.jpeg'
import './AboutPage.css'
import gith from './aboutAssets/gith.png'
import linkd from './aboutAssets/linkd.png'



function AboutPage() {
  return (
    <div className='ab'>
        <div className='abouthead'>
        <h2>About us</h2>
        </div>
        <div className='about'>
            
            <div className='aboutpage'>
                <div className='rash'>
                    <img src={aboutpix} alt="logo" width={300}/>
                </div>
                <h3>Abdulrasheed Momoh</h3>
                <div className='socials'>
                <img className='gitpix' src={gith} alt="g-icon" />
                    <img className='linkdpix' src={linkd} alt="l-icon"/>
                </div>
            </div>
            <div className='secondsec'>
                <div className='chris'>
                    <img src={meda} alt="pics" width={300} height={300} />
                </div>
                <h3>Hammedah</h3>
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
        <div className='about sec-page'>
            
            <div className='aboutpage'>
                <div className='rash'>
                    <img src={fiki} alt="logo" width={300} height={300} object-fit={'cover'}/>
                </div>
                <h3>Olumiyiwa Fiki</h3>
                <div className='socials'>
                <img className='gitpix' src={gith} alt="g-icon" />
                    <img className='linkdpix' src={linkd} alt="l-icon"/>
                </div>
            </div>
            <div className='secondsec'>
                <div className='chris'>
                    <img src={victor} alt="pics" width={300} height={300} />
                </div>
                <h3>Victor Okechukwu</h3>
                <div className='socmed'>
                    <img className='gitpix' src={gith} alt="" />
                    <img className='linkdpix' src={linkd} alt="" />
                </div>
            </div>
            <div className='thirdsec'>
                <div className='mart'>
                    <img src={wasiu} alt="pic" width={300} height={300} backgroundColor="blue"/>
                </div>
                <h3>Abdul-wasiu</h3>
                <div className='socmed-icons'>
                    <img className='gitpix' src={gith} alt="" />
                    <img className='linkdpix' src={linkd} alt="" />
                </div>
            </div>
        </div>
        <div className='about third-page'>
            
            <div className='aboutpage'>
                <div className='rash'>
                    <img src={gabbie} alt="logo" width={300} height={300} object-fit={'cover'}/>
                </div>
                <h3>Gabrielle Khoinom</h3>
                <div className='socials'>
                <img className='gitpix' src={gith} alt="g-icon" />
                    <img className='linkdpix' src={linkd} alt="l-icon"/>
                </div>
            </div>
            <div className='secondsec'>
                <div className='chris'>
                    <img src={bigi} alt="pics" width={300} height={300} />
                </div>
                <h3>Abdulsammad Rabo</h3>
                <div className='socmed'>
                    <img className='gitpix' src={gith} alt="" />
                    <img className='linkdpix' src={linkd} alt="" />
                </div>
            </div>
            <div className='thirdsec'>
                <div className='mart'>
                    <img src={eb} alt="pic" width={300} height={300} backgroundColor="blue"/>
                </div>
                <h3>Ebenezer </h3>
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