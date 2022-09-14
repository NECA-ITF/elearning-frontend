import React from 'react'
import './AboutPage.css'
// import user from './users.json'

function AboutCard({img, name}) {
  return (
    <div>
        <div className='about'>
                <div className='aboutpage'>
                    <div className='cards'>
                        <img className='me' src={img} alt="logo"/>
                    </div>
                    <h3>{name}</h3>
                    {/* <h5>hello</h5> */}
                    <div className='socials'>
                    {/* <img className='gitpix' src={gith} alt="g-icon" /> */}
                        {/* <img className='linkdpix' src={linkd} alt="l-icon"/> */}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AboutCard