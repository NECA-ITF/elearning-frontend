// import React from 'react'
import AboutCard from './AboutCard'
import '../../pages/about/AboutPage.css'

function AboutList({userss}) {
  return (
    <div className='aboutlistgenpics'>
        {userss.map((userz) =>(
            <AboutCard
            key={userz.id.toString()}
            img={userz.img}
            github={userz.github_link}
            name={userz.name}
            />
        ))}
    </div>
  )
}

export default AboutList